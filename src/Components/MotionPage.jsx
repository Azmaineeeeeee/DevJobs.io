
import { motion } from 'framer-motion';

const MotionPage = () => {
  const feedbacks = [
    { id: 1, text: "Absolutely stunning service! I'm blown away by the attention to detail and professionalism.", author: "John Doe", color: "#FF9AA2" },
    { id: 2, text: "Fantastic experience! The team went above and beyond to make sure everything was perfect.", author: "Jane Smith", color: "#A0E7E5" },
    { id: 3, text: "I've never felt more valued as a customer. Thank you for the exceptional service!", author: "Alice Johnson", color: "#FFDAC1" },
    { id: 4, text: "The level of care and dedication shown by the staff is unmatched. Highly recommended!", author: "Michael Brown", color: "#B5EAD7" },
    { id: 5, text: "Words cannot express how grateful I am for the amazing experience. Truly outstanding!", author: "Emily Wilson", color: "#FFB7B2" },
    { id: 6, text: "Outstanding service from start to finish. Will definitely be returning in the future!", author: "David Lee", color: "#FFDAC1" },
  ];

  return (
    <div className="feedback-section">
     
      <div className="feedback-cards grid lg:grid-cols-6 grid-cols-1 gap-3">
        {feedbacks.map((feedback, index) => (
          <motion.div
            key={feedback.id}
            className="feedback-card p-6 rounded-xl"
            style={{ backgroundColor: feedback.color }}
            animate={{ x: [`${index * 100}%`, '-100%', '0%'] }}
            transition={{ duration: 20, loop: Infinity, ease: 'linear' }}
          >
            <p className="feedback-text text-sm">{feedback.text}</p>
            <p className="feedback-author mt-1 font-bold">- {feedback.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MotionPage;












