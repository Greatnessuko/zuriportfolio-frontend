import { Manrope, Poppins } from 'next/font/google';

export const ppReg = Poppins({
  subsets: ['latin'],
  variable: '--font-ppReg',
  weight: ['400'],
});

// bold poppins
export const ppB = Poppins({
  subsets: ['latin'],
  variable: '--font-ppB',
  weight: ['600'],
});

// extra bold
export const ppEB = Poppins({
  subsets: ['latin'],
  variable: '--font-ppEB',
  weight: ['900'],
});

export const manropeL = Manrope({
  subsets: ['latin'],
  variable: '--font-manropeL',
  weight: ['400'],
});

export const manropeB = Manrope({
  subsets: ['latin'],
  variable: '--font-manropeB',
  weight: ['600'],
});

export const manropeEB = Manrope({
  subsets: ['latin'],
  variable: '--font-manropeEB',
  weight: ['700'],
});
