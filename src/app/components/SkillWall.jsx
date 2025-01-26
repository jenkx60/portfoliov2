"use client"
import React, { useState } from 'react';
import html from '@/app/public/html-icon.svg';
import css from '../public/css-icon.svg';
import javascript from '../public/javascript-programming-language-icon.svg';
import react from '../public/react-js-icon.svg';
import next from '../public/nextjs-icon.svg';
import git from '../public/git-icon.svg';
import github from '../public/github-icon.svg';
import bootstrap from '../public/bootstrap-5-logo-icon.svg';
import tailwind from '../public/tailwind-css-icon.svg';
import LogoWall from '../../../LogoWall/LogoWall';

const SkillWall = () => {
    const skillImg = [
        { imgUrl: html, altText: 'HTML'},
        { imgUrl: css, altText: 'CSS'},
        { imgUrl: javascript, altText: 'JavaScript'},
        { imgUrl: react, altText: 'React'},
        { imgUrl: next, altText: 'Next'},
        { imgUrl: git, altText: 'Git'},
        { imgUrl: github, altText: 'GitHub'},
        { imgUrl: bootstrap, altText: 'Bootstrap'},
        { imgUrl: tailwind, altText: 'Tailwind'},
    ]
    console.log(skillImg)

  return (
    <div>
        <LogoWall
            items={skillImg}
            direction='horizontal'
            pauseOnHover={true}
            duration='60s'
            bgColor='#FF204E' 
            size='clamp(8rem, 1rem + 20vmin, 25rem)'
        />
    </div>
  )
}

export default SkillWall