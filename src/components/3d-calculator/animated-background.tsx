"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePreloader } from "../preloader";
import { useMediaQuery } from "@/hooks/use-media-query";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import { Skill, Skillname, SKILLS } from "@/data/skills";
import { STATES } from "./config";
import { useRouter } from "next/navigation";
import { sleep } from "@/lib/utils";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

gsap.registerPlugin(ScrollTrigger);

type Section = "home" | "about" | "skills" | "projects" | "contact";

const AnimatedBackground = () => {
  const { isLoading, bypassLoading } = usePreloader();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [fallingStars, setFallingStars] = useState<{
    start: () => void;
    stop: () => void;
  }>();
  const [keycapAnimations, setKeycapAnimations] = useState<{
    start: () => void;
    stop: () => void;
  }>();

  const calculatorStates = (section: Section) => {
    return STATES[section][isMobile ? "mobile" : "desktop"];
  };

  const handleMouseHover = (e: SplineEvent) => {
    if (!splineApp || selectedSkill?.name === e.target.name) return;

    if (e.target.name === "body" || e.target.name === "platform") {
      setSelectedSkill(null);
      if (splineApp.getVariable("heading") && splineApp.getVariable("desc")) {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
    } else {
      if (!selectedSkill || selectedSkill.name !== e.target.name) {
        const skill = SKILLS[e.target.name as Skillname];
        setSelectedSkill(skill);
      }
    }
  };

  //calculator press interaction
  useEffect(() => {
    if (!selectedSkill || !splineApp) return;
    splineApp.setVariable("heading", selectedSkill.label);
    splineApp.setVariable("desc", selectedSkill.description);
  }, [selectedSkill]);

  useEffect(() => {
    handleSplineInteractions();
    handleGsapAnimations();
    setFallingStars(getFallingStarsAnimation());
    setKeycapAnimations(getKeyCapsAnimation());
  }, [splineApp]);

  useEffect(() => {
    let rotateCalc: GSAPTween;
    let teardownCalc: GSAPTween;
    (async () => {
      if (!splineApp) return;
      const calc: SPEObject | undefined = splineApp.findObjectByName("calc");
      if (!calc) return;
      rotateCalc = gsap.to(calc.rotation, {
        y: Math.PI * 2 + calc.rotation.y,
        duration: 10,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        ease: "back.inOut",
        delay: 2.5,
      });
      teardownCalc = gsap.fromTo(
        calc.rotation,
        {
          y: 0,
          x: -Math.PI,
          z: 0,
        },
        {
          y: -Math.PI / 2,
          duration: 5,
          repeat: -1,
          yoyo: true,
          yoyoEase: true,
          delay: 2.5,
          immediateRender: false,
          paused: true,
        }
      );
      if (activeSection === "home") {
        rotateCalc.restart();
        teardownCalc.pause();
      } else if (activeSection === "contact") {
        rotateCalc.pause();
      } else {
        rotateCalc.pause();
        teardownCalc.pause();
      }

      if (activeSection === "skills") {
      } else {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }

      if (activeSection === "projects") {
        await sleep(300);
        fallingStars?.start();
      } else {
        await sleep(200);
        fallingStars?.stop();
      }

      if (activeSection === "contact") {
        await sleep(600);
        teardownCalc.restart();
        keycapAnimations?.start();
      } else {
        await sleep(600);
        teardownCalc.pause();
        keycapAnimations?.stop();
      }
    })();
    return () => {
      if (rotateCalc) rotateCalc.kill();
      if (teardownCalc) teardownCalc.kill();
    };
  }, [activeSection, splineApp]);

  const [calculatorRevealed, setCalculatorRevealed] = useState(false);
  const router = useRouter();

  //Reveal Keycaps
  useEffect(() => {
    const hash = activeSection === "home" ? "#" : `#${activeSection}`;
    router.push("/" + hash, { scroll: false });
    if (!splineApp || isLoading || calculatorRevealed) return;
    revealKeyCaps();
  }, [splineApp, isLoading, activeSection]);

  const revealKeyCaps = async () => {
    if (!splineApp) return;
    const calc = splineApp.findObjectByName("calc");
    if (!calc) return;
    calc.visible = false;
    await sleep(400);
    calc.visible = true;
    setCalculatorRevealed(true);

    // console.log(activeSection);

    gsap.fromTo(
      calc.scale,
      { x: 0.01, y: 0.01, z: 0.01 },
      {
        x: calculatorStates(activeSection).scale.x,
        y: calculatorStates(activeSection).scale.y,
        z: calculatorStates(activeSection).scale.z,
      }
    );

    const allObjects = splineApp.getAllObjects();
    const keycap = allObjects.filter((obj) => obj.name === "keycap");
    await sleep(900);
    if (isMobile) {
      const mobileKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-mobile"
      );
      mobileKeyCaps.forEach((keycap, idx) => {
        keycap.visible = true;
      });
    } else {
      const desktopKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-desktop"
      );
      desktopKeyCaps.forEach(async (keycap, idx) => {
        await sleep(idx * 70);
        keycap.visible = true;
      });
    }

    keycap.forEach(async (keycap, idx) => {
      keycap.visible = false;
      await sleep(idx * 70);
      keycap.visible = true;
      gsap.fromTo(
        keycap.position,
        { y: 200 },
        { y: 50, duration: 0.5, delay: 0.1, ease: "bounce.out" }
      );
    });
  };

  const handleSplineInteractions = () => {
    if (!splineApp) return;
    splineApp.addEventListener("keyUp", (e) => {
      if (!splineApp) return;
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    });
    splineApp.addEventListener("keyDown", (e) => {
      if (!splineApp) return;
      const skill = SKILLS[e.target.name as Skillname];
      if (skill) setSelectedSkill(skill);
      splineApp.setVariable("heading", skill.label);
      splineApp.setVariable("desc", skill.description);
    });
    splineApp.addEventListener("mouseHover", handleMouseHover);
  };

  const handleGsapAnimations = () => {
    if (!splineApp) return;
    const calc: SPEObject | undefined = splineApp.findObjectByName("calc");
    if (!calc || !splineContainer.current) return;
    gsap.set(calc.scale, {
      ...calculatorStates("home").scale,
    });

    gsap.set(calc.position, {
      ...calculatorStates("home").position,
    });

    //transition to Skills
    gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          setActiveSection("skills");
          gsap.to(calc.scale, {
            ...calculatorStates("skills").scale,
            duration: 1,
          });
          gsap.to(calc.position, {
            ...calculatorStates("skills").position,
            duration: 1,
          });
          gsap.to(calc.rotation, {
            ...calculatorStates("skills").rotation,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setActiveSection("home");
          gsap.to(calc.scale, {
            ...calculatorStates("home").scale,
            duration: 1,
          });
          gsap.to(calc.position, {
            ...calculatorStates("home").position,
            duration: 1,
          });
          gsap.to(calc.rotation, {
            ...calculatorStates("home").rotation,
            duration: 1,
          });
        },
      },
    });

    //transition to Projects
    gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          setActiveSection("projects");
          gsap.to(calc.scale, {
            ...calculatorStates("projects").scale,
            duration: 1,
          });
          gsap.to(calc.position, {
            ...calculatorStates("projects").position,
            duration: 1,
          });
          gsap.to(calc.rotation, {
            ...calculatorStates("projects").rotation,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setActiveSection("skills");
          gsap.to(calc.scale, {
            ...calculatorStates("skills").scale,
            duration: 1,
          });
          gsap.to(calc.position, {
            ...calculatorStates("skills").position,
            duration: 1,
          });
          gsap.to(calc.rotation, {
            ...calculatorStates("skills").rotation,
            duration: 1,
          });
        },
      },
    });

    //transition to Contact
    gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 30%",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          setActiveSection("contact");
          gsap.to(calc.scale, {
            ...calculatorStates("contact").scale,
            duration: 1,
          });
          gsap.to(calc.position, {
            ...calculatorStates("contact").position,
            duration: 1,
          });
          gsap.to(calc.rotation, {
            ...calculatorStates("contact").rotation,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setActiveSection("projects");
          gsap.to(calc.scale, {
            ...calculatorStates("projects").scale,
            duration: 1,
          });
          gsap.to(calc.position, {
            ...calculatorStates("projects").position,
            duration: 1,
          });
          gsap.to(calc.rotation, {
            ...calculatorStates("projects").rotation,
            duration: 1,
          });
        },
      },
    });
  };

  const getFallingStarsAnimation = () => {
    const framesParent = splineApp?.findObjectByName("falling-stars");
    const frames: (SPEObject | undefined)[] = [];
    for (let i = 1; i <= 12; i++) {
      const frame = splineApp?.findObjectByName(`stars-${i}`);
      if (frame) frames.push(frame);
    }

    if (!framesParent || frames.length === 0 || frames.length < 12) {
      return { start: () => {}, stop: () => {} };
    }

    let interval: NodeJS.Timeout;

    const start = () => {
      let i = 0;
      framesParent.visible = true;

      interval = setInterval(() => {
        frames.forEach((frame) => {
          if (frame) frame.visible = false;
        });

        const currentFrame = frames[i];
        if (currentFrame) currentFrame.visible = true;

        i = (i + 1) % frames.length;
      }, 100);
    };

    const stop = () => {
      clearInterval(interval);
      framesParent.visible = false;
      frames.forEach((frame) => {
        if (frame) frame.visible = false;
      });
    };

    return { start, stop };
  };

  const getKeyCapsAnimation = () => {
    if (!splineApp) return { start: () => {}, stop: () => {} };
    let tweens: GSAPTween[] = [];

    const start = () => {
      removePrevTweens();
      Object.values(SKILLS)
        .sort(() => Math.random() - 0.05)
        .forEach((skill, idx) => {
          const keycap = splineApp.findObjectByName(skill.name);
          if (!keycap) return;
          const t = gsap.to(keycap?.position, {
            y: Math.random() * 200 + 200,
            duration: Math.random() * 2 + 2,
            delay: idx * 0.6,
            repeat: -1,
            yoyo: true,
            yoyoEase: "none",
            ease: "elastic.out(1,0.3)",
          });
          tweens.push(t);
        });
    };

    const stop = () => {
      removePrevTweens();
      Object.values(SKILLS).forEach((skill) => {
        const keycap = splineApp.findObjectByName(skill.name);
        if (!keycap) return;
        const t = gsap.to(keycap?.position, {
          y: 0,
          duration: 4,

          repeat: -1,

          ease: "elastic.out(1,0.8)",
        });
        tweens.push(t);
      });
      setTimeout(removePrevTweens, 1000);
    };

    const removePrevTweens = () => {
      tweens.forEach((t) => t.kill());
    };
    return { start, stop };
  };
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          ref={splineContainer}
          onLoad={(app: Application) => {
            setSplineApp(app);
            bypassLoading();
          }}
          scene="/assets/porto-calc.spline"
        />
      </Suspense>
    </>
  );
};

export default AnimatedBackground;
