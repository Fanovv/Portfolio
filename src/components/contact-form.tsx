"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ContactForm = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      toast.success("Thank you!",{
        description: "I'll get back to you as soon as possible.",
      });
      setIsLoading(false);
      setFullName("");
      setMessage("");
      setEmail("");
      const timer = setTimeout(() => {
        router.push("/");
        clearTimeout(timer);
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong! Please check the fields.");

    }
    setIsLoading(false);
  };
  return (
    <form
      className="space-y-4 2xl:text-4xl xl:text-2xl md:text-xl text-sm font-medium"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center">
        <span>My name is</span>
        <Input
          className="mx-2 font-medium 2xl:text-2xl xl:text-xl md:text-lg text-xs flex-grow xl:min-w-[400px] md:min-w-[300px]"
          placeholder="YOUR FULL NAME"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <span>and I</span>
      </div>

      <div className="flex items-center">
        <span>have a</span>
        <Input
          className="mx-2 font-medium 2xl:text-2xl xl:text-xl md:text-lg text-xs w-[60%]"
          placeholder="WEBSITE, FULL-TIME JOB, ETC."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <span>that</span>
      </div>

      <p className="text-left">needs help. You can reach me at</p>

      <div className="flex items-center">
        <Input
          className="mr-2 font-medium 2xl:text-2xl xl:text-xl md:text-lg text-xs w-[70%]"
          placeholder="YOUR EMAIL ADDRESS"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span>to get</span>
      </div>

      <p className="text-left pb-10">things started.</p>

      <Button
        disabled={isLoading}
        variant={"ghost"}
        type="submit"
        className="ml-10 relative"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <img
              src="/assets/rocket.svg"
              className="h-10 w-10 animate-reverse-spin"
            />
          </div>
        ) : (
          <div>- SEND INFO</div>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
