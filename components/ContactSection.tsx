
import React from 'react';
import { ScrollRevealWrapper } from './ScrollRevealWrapper';
import { AnimatedHeading } from './AnimatedHeading';
import { SOCIAL_LINKS, FORMSPREE_ENDPOINT } from '../constants';
import { InstagramIcon, TwitterIcon, LinkedInIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {

  return (
    <section id="contact" className="py-20 bg-neutral-soft"> {/* Changed from bg-bg to bg-neutral-soft */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg text-center">
        <AnimatedHeading
          text="お問い合わせ"
          as="h2"
          className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-primary"
        />
        <ScrollRevealWrapper delay={0.2} direction="up" distance="30px">
          <p className="text-lg text-light-text max-w-xl mx-auto mb-12">
            事業に関するご質問、ワインに関するお問い合わせ、その他お気軽にご連絡ください。
          </p>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper delay={0.3} direction="up" distance="30px">
          <div 
            className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200/50 max-w-xl mx-auto" // Centered form
          >
            <form 
              name="contact" 
              method="POST" 
              action={FORMSPREE_ENDPOINT}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-light-text text-left mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  placeholder="例：山田 太郎"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 
                             bg-gray-50 text-text 
                             focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-light-text text-left mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  placeholder="例：taro.yamada@example.com"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 
                             bg-gray-50 text-text 
                             focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-light-text text-left mb-1">
                  メッセージ本文 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  rows={5}
                  placeholder="お問い合わせ内容をご記入ください..."
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 
                             bg-gray-50 text-text 
                             focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-lg
                             hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 ease-out shadow-md hover:shadow-lg"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </ScrollRevealWrapper>
        
        <ScrollRevealWrapper delay={0.4} direction="up" distance="30px">
            <div className="mt-16">
                <h4 className="text-xl font-serif font-semibold mb-4 text-primary">SNSで繋がる</h4>
                <p className="text-light-text mb-6 max-w-md mx-auto">
                    各種SNSアカウントも運営しております。最新情報や活動については、こちらからもご覧いただけます。
                </p>
                <div className="flex justify-center space-x-6">
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text hover:text-accent transition-colors">
                        <InstagramIcon className="w-7 h-7" /> {/* Changed from w-8 h-8 */}
                    </a>
                    <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-text hover:text-accent transition-colors">
                        <TwitterIcon className="w-7 h-7" /> {/* Changed from w-8 h-8 */}
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text hover:text-accent transition-colors">
                        <LinkedInIcon className="w-7 h-7" /> {/* Changed from w-8 h-8 */}
                    </a>
                </div>
            </div>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
};
