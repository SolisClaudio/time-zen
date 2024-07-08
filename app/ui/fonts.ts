import {  Cutive_Mono } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import { Inconsolata } from 'next/font/google';

export const Mono = Cutive_Mono ({ 
                                    subsets: ['latin'],
                                    weight: ['400'],
                                });

export const digitalClock = Roboto_Mono ({
                                    subsets: ['latin'],
                                    weight: ['100', '400'],
                                });

                                
export const Inter = Inconsolata ({
                                    subsets: ['latin'],
                                    weight: [ '200', '400', '600'],
                                });




// Rest of the code...