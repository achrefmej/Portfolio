// Configuration EmailJS
// Remplacez ces valeurs par vos vraies clés EmailJS

export const emailjsConfig = {
  // Service ID - Obtenez-le depuis EmailJS Dashboard > Email Services
  serviceId: 'service_7n7zulv',
  
  // Template ID - Obtenez-le depuis EmailJS Dashboard > Email Templates  
  templateId: 'template_ebe0icm',
  
  // Public Key - Obtenez-le depuis EmailJS Dashboard > Account > API Keys
  publicKey: '4Yax3Ayv2er8j8OG7'
};

// Fonction pour vérifier si EmailJS est configuré
export const isEmailJSConfigured = () => {
  return emailjsConfig.serviceId !== 'YOUR_SERVICE_ID' && 
         emailjsConfig.templateId !== 'YOUR_TEMPLATE_ID' && 
         emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY';
};

// Instructions de configuration
export const configurationInstructions = {
  step1: "Créez un compte sur https://www.emailjs.com/",
  step2: "Allez dans 'Email Services' et ajoutez votre service email (Gmail, Outlook, etc.)",
  step3: "Allez dans 'Email Templates' et créez un template avec les variables : {{from_name}}, {{from_email}}, {{subject}}, {{message}}",
  step4: "Récupérez vos clés depuis le dashboard et remplacez les valeurs dans ce fichier",
  step5: "Le formulaire utilisera automatiquement EmailJS une fois configuré"
};

// Dépannage erreur Gmail 412
export const troubleshooting = {
  gmail412Error: {
    problem: "412 Gmail_API: Request had insufficient authentication scopes",
    solution: [
      "1. Allez dans EmailJS Dashboard > Email Services",
      "2. Cliquez sur votre service Gmail",
      "3. Cliquez sur 'Reconnect' ou 'Re-authorize'",
      "4. ACCEPTEZ TOUTES les permissions Gmail, notamment l'envoi d'emails",
      "5. Testez avec 'Send test email'",
      "6. Le scope requis: https://www.googleapis.com/auth/gmail.send"
    ],
    alternative: "Utilisez Outlook ou un autre service si Gmail persiste"
  }
};