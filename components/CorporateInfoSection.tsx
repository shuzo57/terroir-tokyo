

import React from 'react';
import { ScrollRevealWrapper } from './ScrollRevealWrapper';
import { AnimatedHeading } from './AnimatedHeading';
import { COMPANY_NAME, COMPANY_ADDRESS, CONTACT_EMAIL, FOUNDER_INFO_DATA } from '../constants';

export const CorporateInfoSection: React.FC = () => {
  return (
    <section id="corporate-info" className="py-20 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg text-center">
        <AnimatedHeading
          text="企業情報"
          as="h2"
          className="text-3xl sm:text-4xl font-serif font-bold mb-12 text-primary"
        />
        <ScrollRevealWrapper direction="up" distance="30px" delay={0.1}>
          <div className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-xl border border-gray-200/50 max-w-xl mx-auto text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-primary text-center">{COMPANY_NAME}</h3>
            
            <div className="space-y-5 text-light-text">
              <div>
                <strong className="block font-medium text-text mb-1">代表者:</strong>
                <p>{FOUNDER_INFO_DATA.name} ({FOUNDER_INFO_DATA.title})</p>
              </div>

              <hr className="my-5 border-gray-200" />

              <div>
                <strong className="block font-medium text-text mb-1">所在地:</strong>
                <p className="whitespace-pre-line">{COMPANY_ADDRESS}</p>
              </div>

              <hr className="my-5 border-gray-200" />

              <div>
                <strong className="block font-medium text-text mb-1">Email:</strong>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary hover:text-accent transition-colors underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            
            <hr className="my-6 border-gray-200" />

            <p className="text-sm text-gray-500 mt-6 text-center">
              事業内容、採用に関するお問い合わせは、<a href="#contact" className="text-accent hover:underline">お問い合わせフォーム</a>よりご連絡ください。
            </p>
          </div>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
};