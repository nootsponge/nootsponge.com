export const onRequestPost: PagesFunction = async (context) => {
  const { body } = context.request;

  const data: FormData = await context.request.formData();

  const quoteRequest: QuoteRequest = {
    package: data.get("package") as string,
    basicExtra1: data.get("basic-extra-1") === "on",
    basicExtra2: data.get("basic-extra-2") === "on",
    standardExtra1: data.get("standard-extra-1") === "on",
    standardExtra2: data.get("standard-extra-2") === "on",
    standardExtra3: parseInt(data.get("standard-extra-3") as string),
    premiumExtra1: data.get("premium-extra-1") === "on",
    premiumExtra2: data.get("premium-extra-2") === "on",
    premiumExtra3: parseInt(data.get("premium-extra-3") as string),

    domainName: data.get("domain-name") as string,
    projectDescription: data.get("project-description") as string,
    projectType: data.get("project-type") as string,

    name: data.get("name") as string,
    pronouns: data.get("pronouns") as string,
    email: data.get("email") as string,
    preferredContact: data.get("preferred-contact") as string,
    preferredContactUsername: data.get("preferred-contact-username") as string,
  };

  const extra1 = () => {
    switch (quoteRequest.package) {
      case "Basic":
        return quoteRequest.basicExtra1 ? "✅" : "❌";
      case "Standard":
        return quoteRequest.standardExtra1 ? "✅" : "❌";
      case "Premium":
        return quoteRequest.premiumExtra1 ? "✅" : "❌";
      default:
        return "❌";
    }
  };

  const extra2 = () => {
    switch (quoteRequest.package) {
      case "Basic":
        return quoteRequest.basicExtra2 ? "✅" : "❌";
      case "Standard":
        return quoteRequest.standardExtra2 ? "✅" : "❌";
      case "Premium":
        return quoteRequest.premiumExtra2 ? "✅" : "❌";
      default:
        return "❌";
    }
  };

  const extra3 = () => {
    switch (quoteRequest.package) {
      case "Standard":
        return quoteRequest.standardExtra3;
      case "Premium":
        return quoteRequest.premiumExtra3;
      default:
        return "N/A";
    }
  };

  // make webhook request
  const webhookResponse = await fetch(
    "https://discord.com/api/webhooks/1092508840102207662/AtUlyll_714A3KxuicojXv_-jIGIv7BreASSACSSnH_E3E1L8xr5Yfjpg6Hda3THLXAl",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "<@148680149548793856> New quote request!",
        embeds: [
          {
            title: "Quote Request",
            color: 0x7b00ff,
            fields: [
              {
                name: "Name",
                value: quoteRequest.name + " (" + quoteRequest.pronouns + ")",
                inline: true,
              },
              {
                name: "Email",
                value: quoteRequest.email,
                inline: true,
              },
              {
                name: "Preferred Contact",
                value:
                  quoteRequest.preferredContactUsername +
                  " (" +
                  quoteRequest.preferredContact +
                  ")",
                inline: false,
              },
              {
                name: "Package",
                value: quoteRequest.package,
              },
              {
                name: "Animated Elements",
                value: extra1(),
                inline: true,
              },
              {
                name: "Advanced Theme",
                value: extra2(),
                inline: true,
              },
              {
                name: "Additional Pages",
                value: extra3(),
                inline: true,
              },
              {
                name: "Domain Name",
                value: quoteRequest.domainName,
              },
              {
                name: "Project Description",
                value: quoteRequest.projectDescription,
              },
              {
                name: "Business or Individual?",
                value: quoteRequest.projectType,
              },
            ],
          },
        ],
      }),
    }
  );

  if (!webhookResponse.ok) {
    console.error("Webhook request failed.", webhookResponse);

    return new Response(
      JSON.stringify({ success: false, error: webhookResponse.statusText }),
      { status: 500 }
    );
  }

  return new Response(
    JSON.stringify({ success: true, message: "Request sent successfully." }),
    { status: 200 }
  );
};

interface QuoteRequest {
  package: string;
  basicExtra1: boolean;
  basicExtra2: boolean;
  standardExtra1: boolean;
  standardExtra2: boolean;
  standardExtra3: number;
  premiumExtra1: boolean;
  premiumExtra2: boolean;
  premiumExtra3: number;

  domainName: string;
  projectDescription: string;
  projectType: string;

  name: string;
  pronouns: string;
  email: string;
  preferredContact: string;
  preferredContactUsername: string;
}
