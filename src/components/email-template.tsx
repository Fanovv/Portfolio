import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div>
    Hello,
    <br/>
    <br/>
    My name is <strong>{fullName}</strong> and I have a <strong>{message}</strong> that needs help. You can reach me at <strong>{email}</strong> to get things started.
    <br/>
    <br/>
    Best regards,
    <br/>
    <em><strong>{fullName}</strong></em>
  </div>
);