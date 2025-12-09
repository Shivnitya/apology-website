import { motion } from "framer-motion";
import { Cat, Heart, PawPrint } from "lucide-react";

export default function ApologyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 text-gray-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-xl border border-pink-200"
      >
        <div className="flex justify-center mb-4">
          <PawPrint className="w-12 h-12 text-pink-500" />
        </div>

        <h1 className="text-3xl font-bold mb-2 text-pink-600 flex items-center justify-center gap-2">
          <Cat className="w-8 h-8" /> I'm Sowwy, Love <Heart className="text-red-400 w-6 h-6" />
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          I acted like a grumpy little kitten… and I made my favourite human sad.
          I never wanted to hurt you. You are my comfort, my warmth, my safe
          place.
          <br /><br />
          Can we cuddle away the fight and start fresh?
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="bg-pink-400 text-white font-semibold py-2 px-6 rounded-full shadow-md flex items-center gap-2 mx-auto">
            <PawPrint className="w-5 h-5" /> Forgive your little kitten?
          </button>
        </motion.div>

        <p className="mt-6 text-pink-500 text-sm italic">
          "I’ll be your softest, cutest, most loving kitten again… just don’t stay
          mad at me for long."
        </p>
      </motion.div>
    </div>
  );
}
