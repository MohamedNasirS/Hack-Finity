import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto bg-hackfinity-darkblue border-hackfinity-blue/30 text-white rounded-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl font-bold mb-2">Hack-Finity Terms and Conditions</DialogTitle>
          <DialogDescription className="text-hackfinity-gray text-sm">
            Please read these terms carefully before proceeding with your registration.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-hackfinity-gray text-sm space-y-4">
          <p className="font-bold text-white">Date: 05.07.2025 to 06.07.2025</p>
          <p>Welcome to Hack-Finity! By participating in this event, you agree to abide by the following Terms and Conditions. Please read them carefully.</p>

          <h3 className="font-semibold text-white text-lg mt-4">1. Eligibility</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Participants must be at least 18 years old, or have written permission from a legal guardian if underage.</li>
            <li>Open to individuals or teams (up to 4 members per team).</li>
            <li>Participants must register using the official registration form provided.</li>
          </ul>

          <h3 className="font-semibold text-white text-lg mt-4">2. Code of Conduct</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Respect all participants, organizers, and volunteers.</li>
            <li>No harassment, discrimination, or inappropriate behavior will be tolerated.</li>
            <li>Hack-Finity follows a zero-tolerance policy for plagiarism and unethical behavior.</li>
          </ul>

          <h3 className="font-semibold text-white text-lg mt-4">3. Project Rules</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>All code must be written during the hackathon timeframe.</li>
            <li>Open-source libraries/tools can be used, but must be credited properly.</li>
            <li>Your submission must be your original work. Any form of plagiarism will lead to disqualification.</li>
          </ul>

          <h3 className="font-semibold text-white text-lg mt-4">4. Judging Criteria</h3>
          <p>Projects will be evaluated based on:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Innovation & Creativity</li>
            <li>Technical Difficulty</li>
            <li>Design & User Experience</li>
            <li>Real-world Impact</li>
            <li>Presentation</li>
          </ul>
          <p>The decision of the judges is final and binding.</p>

          <h3 className="font-semibold text-white text-lg mt-4">5. Ownership & Intellectual Property</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Teams retain ownership of their projects.</li>
            <li>By submitting a project, you grant Hack-Finity the right to showcase your work (e.g., on our website, social media, or event recap).</li>
          </ul>

          <h3 className="font-semibold text-white text-lg mt-4">6. Prizes</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Prizes are non-transferable and cannot be exchanged for cash.</li>
            <li>Winners are responsible for any applicable taxes related to the prize.</li>
          </ul>

          <h3 className="font-semibold text-white text-lg mt-4">7. Disqualification</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Hack-Finity reserves the right to disqualify any participant or team for violating these terms or engaging in misconduct.</li>
          </ul>

          <h3 className="font-semibold text-white text-lg mt-4">8. Privacy</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Any personal information collected will be used solely for event communication and logistics.</li>
            <li>We respect your privacy and will not share your data with third parties without consent.</li>
          </ul>

          <h3 className="font-semibold text-white text-lg mt-4">9. Changes to the Event</h3>
          <p>Hack-Finity organizers reserve the right to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Modify the schedule, rules, or prizes</li>
            <li>Cancel or postpone the event if necessary</li>
            <li>Disqualify entries found in breach of terms</li>
          </ul>

          <h3 className="font-semibold text-white text-lg mt-4">10. Liability</h3>
          <p>Hack-Finity, its organizers, sponsors, and partners are not responsible for:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Any loss or damage to personal property</li>
            <li>Any injuries or issues arising during the event (online or in-person)</li>
          </ul>
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