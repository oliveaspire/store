import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

function About() {
  const [selectedFAQ, setSelectedFAQ] = useState(null)

  const faqs = [
    {
      question: "What is DigitalStore?",
      answer: "DigitalStore is an online shopping platform offering a wide range of products from fashion to tech gadgets.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact customer support via our Contact Us page or email us at support@digitalstore.com.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including credit cards, PayPal, and more.",
    },
  ]

  const toggleFAQ = (index) => {
    if (selectedFAQ === index) {
      setSelectedFAQ(null)
    } else {
      setSelectedFAQ(index)
    }
  }

  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-900 p-4">
      <div className="m-20 max-w-4xl">
        <div className="mb-10 text-center">
          <p className="font-bold text-2xl ml-5">
            Welcome to DigitalStore
          </p>
        </div>

        <div>
          <h1 className="font-bold text-2xl">About DigitalStore</h1>
          <p className="ml-5 mt-2">
            At DigitalStore, we believe in providing a seamless and enjoyable online shopping experience. DigitalStore is dedicated to curating a diverse range of high-quality products and bringing them to your fingertips. Whether you're a fashion enthusiast, a tech guru, or someone looking for unique finds, we've got you covered.
          </p>
        </div>

        <div className="mt-8">
          <h1 className="font-bold text-2xl">Tech Stack</h1>
          <p className="ml-5 mt-2">
            DigitalStore is not just an ordinary e-commerce platform, it's a blend of cutting-edge technology and user-centric design. Our website is crafted using ReactJS for a smooth and responsive interface, TailwindCSS for a visually appealing layout, and Redux-toolkit to ensure efficient state management. We've leveraged the power of these technologies to create a platform that's not only visually stunning but also functionally robust.
          </p>
        </div>

        <div className="mt-8">
          <h1 className="font-bold text-2xl text-center">What Sets DigitalStore Apart</h1>
          
           
              <h2 className="font-bold text-xl">User-Friendly Interface</h2>
              <p className="ml-5 mt-1">
                We understand the importance of a user-friendly interface. That's why we've invested time and effort into designing an intuitive website that makes your shopping experience effortless.
              </p>
            
           
              <h2 className="font-bold text-xl">Diverse Product Range</h2>
              <p className="ml-5 mt-1">
                DigitalStore boasts a diverse collection of products, spanning various categories to cater to your unique needs and preferences. From the latest fashion trends to cutting-edge gadgets, we have it all.
              </p>
            
            
              <h2 className="font-bold text-xl">Seamless Shopping Journey</h2>
              <p className="ml-5 mt-1">
                Explore our website with ease. From browsing through product categories to detailed product descriptions, adding items to your cart, and securely checking out – we've streamlined every step to ensure a hassle-free experience.
              </p>
            
        </div>

        <div className="mt-8">
          <h1 className="font-bold text-2xl">FAQ</h1>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left font-bold text-xl p-2 bg-gray-200 rounded-md"
              >
                {faq.question}
              </button>
              <Transition
                show={selectedFAQ === index}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <p className="ml-5 mt-2 p-2 bg-gray-100 rounded-md">
                  {faq.answer}
                </p>
              </Transition>
            </div>
          ))}
        </div>

        
      </div>
    </div>
    <footer className="mt-10 p-4 bg-gray-200 text-center rounded-md">
          <p>&copy; 2024 DigitalStore. All rights reserved.</p>
          <p>Contact: support@digitalstore.com</p>
        </footer>
    </>
  )
}

export default About
