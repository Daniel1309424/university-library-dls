import emailjs from "@emailjs/browser";
import { Client as WorkflowClient } from "@upstash/workflow";
import { Client as QStashClient } from "@upstash/qstash";
import config from "@/lib/config";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

const qstashClient = new QStashClient({
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    
    const serviceID = config.env.emailjs.serviceId;  
    const templateID = config.env.emailjs.templateId;  
    const userID = config.env.emailjs.userId;  

    const emailParams = {
      to_email: email,
      subject,
      message,
    };

    await emailjs.send(serviceID, templateID, emailParams, userID);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email sending failed");
  }
};
