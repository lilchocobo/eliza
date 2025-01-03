import { IAgentRuntime, elizaLogger } from "@elizaos/core";

export class LoopMessageAPI {
  private licenseKey: string;
  private secretKey: string;
  private senderName: string;

  constructor(private runtime: IAgentRuntime) {
    this.licenseKey = runtime.getSetting("LOOP_LICENSE_KEY");
    this.secretKey = runtime.getSetting("LOOP_SECRET_KEY");
    this.senderName = runtime.getSetting("LOOP_SENDER_NAME");

    if (!this.licenseKey || !this.secretKey || !this.senderName) {
      elizaLogger.error("Missing required LoopMessage settings");
      throw new Error("Missing required LoopMessage settings");
    }

    console.log("LoopMessageAPI", {licenseKey: this.licenseKey, secretKey: this.secretKey, senderName: this.senderName});
  }

  async sendMessage(
    recipient: string,
    text: string,
    options?: {
      media_url?: string;
      audio_message?: boolean;
      attachments?: string[];
      effect?: string;
      reply_to_id?: string;
    }
  ): Promise<boolean> {
    try {
      const response = await fetch(
        "https://server.loopmessage.com/api/v1/message/send/",
        {
          method: 'POST',
          headers: {
            Authorization: this.licenseKey,
            "Loop-Secret-Key": this.secretKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipient,
            text,
            sender_name: this.senderName,
            ...(options?.media_url && { media_url: options.media_url }),
            ...(options?.audio_message && { audio_message: true }),
            ...(options?.attachments && { attachments: options.attachments }),
            ...(options?.effect && { effect: options.effect }),
            ...(options?.reply_to_id && { reply_to_id: options.reply_to_id }),
          }),
        }
      );

      return response.ok;
    } catch (error) {
      elizaLogger.error("Failed to send message:", error);
      return false;
    }
  }

  async sendAudioMessage(
    recipient: string,
    text: string,
    mediaUrl: string
  ): Promise<boolean> {
    return this.sendMessage(recipient, text, {
      media_url: mediaUrl,
      audio_message: true
    });
  }

  async sendReaction(
    recipient: string,
    messageId: string,
    reaction: ReactionType
  ): Promise<void> {
    try {
      await fetch(
        "https://server.loopmessage.com/api/v1/message/send/",
        {
          method: 'POST',
          headers: {
            Authorization: this.licenseKey,
            "Loop-Secret-Key": this.secretKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipient,
            message_id: messageId,
            reaction,
            sender_name: this.senderName,
          }),
        }
      );
    } catch (error) {
      elizaLogger.error("Failed to send reaction:", error);
    }
  }

  async sendFile(
    recipient: string,
    fileUrl: string,
    message?: string
  ): Promise<boolean> {
    return this.sendMessage(recipient, message || ".", {
      attachments: [fileUrl],
    });
  }

  async sendVcf(
    recipient: string,
  ): Promise<boolean> {
    const vcfUrl = "https://imsgeliza.b-cdn.net/static/faith_final.vcf";
    return this.sendFile(recipient, vcfUrl, "Save my contact info so you can reach me anytime 💕");
  }
}

export type ReactionType =
  | 'love' | 'like' | 'dislike' | 'laugh' | 'exclaim' | 'question'
  | '-love' | '-like' | '-dislike' | '-laugh' | '-exclaim' | '-question';