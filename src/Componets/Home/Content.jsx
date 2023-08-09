import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

function Content() {
    const data1 = `As a Front-End Developer with a passion for creating intuitive and visually engaging user experiences, I take pride in crafting websites and web applications that leave a lasting impression on users. With a solid foundation in HTML, CSS, and JavaScript, I thrive on turning design concepts into functional, responsive, and user-friendly interfaces. My expertise lies in implementing modern front-end technologies and frameworks like React, Angular, and Vue.js to build interactive and dynamic web applications. I am dedicated to staying up-to-date with the latest trends and best practices in the ever-evolving tech landscape. Let's connect and explore how we can create meaningful and impactful digital experiences together. Feel free to reach out for collaboration opportunities, projects, or networking..`
    const data2 = 'As a dedicated React Developer, I am passionate about crafting exceptional user interfaces and front-end experiences. With a strong command over React and its ecosystem, I thrive on building dynamic and interactive web applications that push the boundaries of user interactivity. Having honed my skills in JavaScript, HTML, and CSS, I possess a deep understanding of front-end development principles. Leveraging my expertise in React, I enjoy architecture robust and scalable applications that meet the needs of both users and stakeholders. Throughout my journey as a React Developer, I have collaborated with cross-functional teams, including designers and back-end developers, to bring innovative ideas to life. This collaborative spirit has taught me the value of teamwork and the importance of delivering results that exceed expectations.'
    const data3 = 'As a CMS (Content Management System) Developer, I am passionate about creating efficient and user-friendly platforms that empower content creators to manage and publish digital content seamlessly. With a focus on developing robust CMS solutions, I play a pivotal role in enhancing website management and content delivery processes. Having extensive experience in CMS technologies like WordPress, Shopify, Drupal, or other custom-built solutions, I possess a deep understanding of how to implement and customize these systems to cater to specific business needs. My expertise extends to integrating plugins, modules, and extensions to extend the functionality of CMS platforms, ensuring that they meet the unique requirements of diverse projects.'
    const data4 = 'As a JavaScript Developer, I am deeply passionate about crafting innovative and dynamic web applications that engage users and provide seamless experiences. With a strong foundation in JavaScript, I specialize in building interactive interfaces and leveraging the power of modern frameworks and libraries. My expertise in JavaScript enables me to develop feature-rich and high-performance web applications, utilizing frameworks like React, Angular, or Vue.js to create efficient and scalable front-end solutions. With a focus on continuous learning, I stay updated with the latest trends and advancements in JavaScript development and related technologies. As a problem solver, I enjoy tackling complex challenges and finding elegant solutions to optimize performance and user experience'

    const [RoleDiscription] = useTypewriter({
        words: [data1, data2, data3, data4],
        loop: 2,
        typeSpeed: 10,
        deleteSpeed: 20,
        delaySpeed: 1000
    })
    return (
        <div>
            <p className='py-5 text-[15px] text-slate font-medium text-left tracking-normal text-slate-500'>{RoleDiscription}</p>

        </div>
    )
}

export default Content
