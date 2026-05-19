import React from 'react';
import { benefitOne, benefitTwo } from './data.js';

describe('Data Components', () => {
  describe('benefitOne', () => {
    it('should have the correct title', () => {
      expect(benefitOne.title).toBe('Highlight your benefits');
    });

    it('should have the correct description', () => {
      expect(benefitOne.desc).toBe(
        'You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.'
      );
    });

    it('should have an image property', () => {
      expect(benefitOne.image).toBeDefined();
    });

    it('should have bullets array with 3 items', () => {
      expect(benefitOne.bullets).toBeInstanceOf(Array);
      expect(benefitOne.bullets.length).toBe(3);
    });

    it('should have correct bullet items', () => {
      const bullets = benefitOne.bullets;

      expect(bullets[0]).toEqual({
        title: 'Understand your customers',
        desc: 'Then explain the first point breifly in one or two lines.',
        icon: expect.anything()
      });

      expect(bullets[1]).toEqual({
        title: 'Improve acquisition',
        desc: 'Here you can add the next benefit point.',
        icon: expect.anything()
      });

      expect(bullets[2]).toEqual({
        title: 'Drive customer retention',
        desc: 'This will be your last bullet point in this section.',
        icon: expect.anything()
      });
    });
  });

  describe('benefitTwo', () => {
    it('should have the correct title', () => {
      expect(benefitTwo.title).toBe('Offer more benefits here');
    });

    it('should have the correct description', () => {
      expect(benefitTwo.desc).toBe(
        'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.'
      );
    });

    it('should have an image property', () => {
      expect(benefitTwo.image).toBeDefined();
    });

    it('should have bullets array with 3 items', () => {
      expect(benefitTwo.bullets).toBeInstanceOf(Array);
      expect(benefitTwo.bullets.length).toBe(3);
    });

    it('should have correct bullet items', () => {
      const bullets = benefitTwo.bullets;

      expect(bullets[0]).toEqual({
        title: 'Mobile Responsive Template',
        desc: 'Nextly is designed as a mobile first responsive template.',
        icon: expect.anything()
      });

      expect(bullets[1]).toEqual({
        title: 'Powered by Next.js & TailwindCSS',
        desc: 'This template is powered by latest technologies and tools.',
        icon: expect.anything()
      });

      expect(bullets[2]).toEqual({
        title: 'Dark & Light Mode',
        desc: 'Nextly comes with a zero-config light & dark mode. ',
        icon: expect.anything()
      });
    });
  });
});