import { motion } from 'framer-motion'
import { useForm, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useEffect, useState } from 'react';

const Feedback = () => {

  const { executeRecaptcha } = useGoogleReCaptcha();
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    message: '',
    recaptcha: '',
  }); 

  const [recaptchaReady, setRecaptchaReady] = useState(false);  

  const { flash } = usePage().props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!executeRecaptcha){
      alert('recaptcha not yet ready');
      return;
    }

    const token = await executeRecaptcha('contact_form');
    setData('recaptcha', token);

    post(route('feedback.store'), {
      preserveScroll: true,
      onSuccess: () => reset(), // Clear form after success
    });
  };

  useEffect(() => {
      if(executeRecaptcha){
        setRecaptchaReady(true);
      }
    }, 
    [executeRecaptcha]);

  return (
      <section id="feedback" className="py-20 bg-[#1f1f22] text-center px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-100 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          We Value Your Feedback
        </motion.h2>

  

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Feedback Form */}
          <form onSubmit={handleSubmit} className="flex-1 bg-[#28282b] p-8 rounded-2xl shadow-md space-y-4">
                   {flash.success && (
          <div className="bg-green-100 text-green-800 border border-green-300 px-4 py-2 rounded-lg mb-4 text-center">
            {flash.success}
          </div>
        )}
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              placeholder="Your Email"
              className="w-full border border-[#3a3a3e] bg-[#28282b] text-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.email && <p className="text-red-600 text-left text-sm mt-1">{errors.email}</p>}

            <textarea
              value={data.message}
              onChange={(e) => setData('message', e.target.value)}
              placeholder="Your Message"
              rows="4"
              className="w-full border border-[#3a3a3e] bg-[#28282b] text-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
            {errors.message && <p className="text-red-600 text-left text-sm mt-1">{errors.message}</p>}
            {/* {errors.recaptcha && <p className="text-red-600 text-left text-sm mt-1">{errors.recaptcha}</p>} */}

            <button
              type="submit"
              className="bg-[#3a3a3e] text-gray-100 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-500 transition"
            >
              {recaptchaReady ? 'Send' : 'Loading reCAPTCHA...'}

            </button>
          </form>

          {/* Map */}
          <div className="flex-1 h-96 md:h-auto rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.671388428538!2d4.691964976130071!3d50.88149097952743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c145e2208b8d4b%3A0x2f81ef2092f2c2eb!2sZeelstraat%206%2C%203000%20Leuven%2C%20Belgium!5e0!3m2!1sen!2sus!4v1698225689361!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="rounded-2xl"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Leuven Location"
            ></iframe>
          </div>
        </div>
      </section>
  )
}

export default Feedback