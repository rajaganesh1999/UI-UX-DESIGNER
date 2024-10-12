import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Cloud, Lock, Zap, Menu, X, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95])

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false)
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        className="bg-white py-4 px-6 flex items-center justify-between shadow-sm sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Image src="/images/cloudzs.png" alt="CloudZS Logo" width={120} height={40} />
          
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {["Services", "About Us", "Clients", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-600 hover:text-[#3476F0] transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>
        <Button className="bg-[#3476F0] hover:bg-[#FF7900] text-white hidden md:inline-flex">
          Get Started
        </Button>
        <button
          className="md:hidden text-[#3476F0]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-x-0 top-16 bg-white z-40 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 px-6 space-y-4">
              {["Services", "About Us", "Clients", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-lg text-gray-600 hover:text-[#3476F0] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button
                className="bg-[#3476F0] hover:bg-[#2a5fc8] text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <motion.section
          className="bg-gradient-to-r from-[#3476F0] to-[#2a5fc8] text-white py-20 px-6 relative overflow-hidden"
          style={{ opacity, scale }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            <Cloud className="w-full h-full opacity-10" />
          </motion.div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Secure Your Cloud. Empower Your Business.
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              CloudZS delivers cutting-edge cloud security solutions to protect your most valuable digital assets.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button className="bg-[#FF7900] text-white hover:bg-[#38bdf8]">
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#3476F0]">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cloud Security Assessments",
                  icon: ShieldCheck,
                  description: "Comprehensive evaluation of your cloud infrastructure to identify vulnerabilities and enhance your security posture.",
                  features: [
                    "Infrastructure evaluation",
                    "Vulnerability identification",
                    "Security posture enhancement",
                    "Customized assessment reports",
                    "Remediation recommendations"
                  ]
                },
                {
                  title: "Threat Detection & Response",
                  icon: Zap,
                  description: "Proactive monitoring and rapid incident response to mitigate potential security breaches.",
                  features: [
                    "24/7 proactive monitoring",
                    "Real-time threat detection",
                    "Rapid incident response",
                    "Advanced analytics",
                    "Security optimization"
                  ]
                },
                {
                  title: "Data Encryption & Compliance",
                  icon: Lock,
                  description: "Robust encryption protocols and assistance with regulatory compliance requirements.",
                  features: [
                    "End-to-end data encryption",
                    "Regulatory compliance assistance",
                    "Data privacy management",
                    "Compliance reporting",
                    "Regular compliance audits"
                  ]
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full transition-transform duration-300 hover:scale-105 border-t-4 border-t-[#FF7900]">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <service.icon className="mr-2 text-[#FF7900] flex-shrink-0" />
                        <span className="break-words text-[#3476F0]">{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="md:hidden text-sm">{service.description}</p>
                      <div className="hidden md:block">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          {service.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#3476F0] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose CloudZS?</h2>
            <p className="text-xl mb-8">
              We redefine the standard for cloud security, enabling businesses to confidently embrace the cloud while protecting their most sensitive data and assets.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  title: "Security-First Approach",
                  description: "We prioritize security in everything we do, embedding robust protective measures into every layer of our solutions."
                },
                {
                  title: "Innovation and Adaptability",
                  description: "We continuously evolve our technologies to stay ahead of emerging threats and industry trends."
                },
                {
                  title: "Client-Centric Focus",
                  description: "We are committed to understanding our clients' unique challenges and delivering tailored solutions."
                },
                {
                  title: "Integrity and Trust",
                  description: "We uphold the highest standards of integrity, transparency, and ethical conduct in all our interactions."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white text-[#3476F0] p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FF7900] text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Cloud?</h2>
              <p className="text-xl mb-8">
                Get in touch with our team of experts to learn how CloudZS can protect your business.
              </p>
              <Button className="bg-white text-[#FF7900] hover:bg-[#3476F0] hover:text-white">
              Contact Us
              </Button>

            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
          <Image src="/images/cloudzs.png" alt="CloudZS Logo" width={120} height={40} />
            <p className="text-sm">Redefining cloud security for businesses worldwide.</p>
          </div>
          {[
            {
              title: "Services",
              links: ["Cloud Security Assessments", "Threat Detection & Response", "Data Encryption & Compliance"]
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Contact"]
            },
            {
              title: "Connect",
              links: ["Twitter", "LinkedIn", "GitHub"]
            }
          ].map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-[#FF7900] transition-colors duration-200">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CloudZS. All rights reserved.</p>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-6 right-6 bg-[#facc15] text-white p-3 rounded-full shadow-lg hover:bg-[#111827] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3476F0]"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
