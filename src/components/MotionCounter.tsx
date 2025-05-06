'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type MotionCounterProps = {
  to: number;
  duration?: number;
  className?: string;
};

export default function MotionCounter({
  to,
  duration = 2,
  className = 'text-xl font-bold text-white',
}: MotionCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [count, duration, inView, to]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
