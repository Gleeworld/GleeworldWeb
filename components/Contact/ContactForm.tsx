interface ContactFormProps {
  title?: string;
  details?: string;
}

export default function ContactForm({ 
  title = "Contact Us", 
  details = "Reach out for any questions about our pharmacy services"
}: ContactFormProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{details}</p>
        </div>
        
        <div className="bg-silver rounded-2xl p-8 md:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-dark-gray mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-magneta transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-dark-gray mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-magneta transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-dark-gray mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-magneta transition-all"
                placeholder="What is this regarding?"
              />
            </div>
            
            <div>
              <label className="block text-dark-gray mb-2">Message</label>
              <textarea 
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-magneta transition-all"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="bg-magneta text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange transition-all duration-300 w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
