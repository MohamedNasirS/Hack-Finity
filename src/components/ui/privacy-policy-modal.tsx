import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto bg-hackfinity-darkblue border-hackfinity-blue/30 text-white rounded-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl font-bold mb-2">Hack-Finity Privacy Policy</DialogTitle>
          <DialogDescription className="text-hackfinity-gray text-sm">
            Your privacy is critically important to us. This policy outlines how we collect, use, and protect your data.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-hackfinity-gray text-sm space-y-4">
          <p className="font-bold text-white">Last Updated: June 2, 2025</p>
          <p>
            Hack-Finity ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you register for and participate in the Hack-Finity event.
          </p>

          <h3 className="font-semibold text-white text-lg mt-4">1. Information We Collect</h3>
          <p>We may collect personal identification information from you in a variety of ways, including, but not limited to, when you:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Register for the event (e.g., name, email address, mobile number, university information, team details).</li>
            <li>Participate in surveys or provide feedback.</li>
            <li>Communicate with us via email or other channels.</li>
            <li>Any other information you voluntarily provide.</li>
          </ul>
          <p>We also collect non-personal information such as browser type, operating system, and IP address for analytical purposes to improve our services.</p>

          <h3 className="font-semibold text-white text-lg mt-4">2. How We Use Your Information</h3>
          <p>The information we collect is used for the following primary purposes:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>To process your registration and manage your participation in the event.</li>
            <li>To communicate with you regarding event updates, logistics, and important announcements.</li>
            <li>To facilitate team formation and networking among participants.</li>
            <li>To ensure compliance with our Code of Conduct and Project Rules.</li>
            <li>To improve our event planning, services, and future events based on feedback and analytics.</li>
            <li>For internal record keeping and administrative purposes.</li>
          </ul>

          <h3 className="font-semibold text-white text-lg mt-4">3. Disclosure of Your Information</h3>
          <p>We do not sell, trade, or rent your personal identification information to third parties. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and sponsors for the purposes outlined above (e.g., for reporting event reach).</p>
          <p>We may disclose your personal information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or a government agency).</p>

          <h3 className="font-semibold text-white text-lg mt-4">4. Data Security</h3>
          <p>We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, such as your name, email address, and data stored on our systems.</p>
          <p>While we strive to use commercially acceptable means to protect your personal information, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.</p>

          <h3 className="font-semibold text-white text-lg mt-4">5. Third-Party Websites</h3>
          <p>Our event communications and website may contain links to third-party websites (e.g., social media platforms, sponsor websites). We are not responsible for the privacy practices or the content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>

          <h3 className="font-semibold text-white text-lg mt-4">6. Your Acceptance of These Terms</h3>
          <p>By registering for Hack-Finity, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not register for the event. Your continued participation in the event following the posting of changes to this policy will be deemed your acceptance of those changes.</p>

          <h3 className="font-semibold text-white text-lg mt-4">7. Changes to This Privacy Policy</h3>
          <p>Hack-Finity has the discretion to update this Privacy Policy at any time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage users to frequently check this page for any changes to stay informed about how we are protecting the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>

          <h3 className="font-semibold text-white text-lg mt-4">8. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, the practices of this event, or your dealings with us, please contact us at [Your Contact Email Address, e.g., contact@hackfinity.com].</p>
        </div>
        <div className="flex justify-end pt-4">
          <Button onClick={() => onOpenChange(false)} className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};