"use client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
     const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#071018]/90 backdrop-blur-xl">
  <div className="h-[72px] px-[7%] flex items-center justify-between">
    <div className="font-mono tracking-[0.2em] text-xs md:text-sm font-bold">
      <span className="text-white">SUPREETH</span>
      <span className="text-[#168fff]"> / </span>
      <span className="text-[#6f7c88] hidden sm:inline">
        JAVA-FULL-STACK
      </span>
    </div>

    {/* DESKTOP MENU */}
    <div className="hidden xl:flex items-center gap-7 font-mono text-xs tracking-[0.15em]">
      <a href="#about" className="text-[#c8d0d8] hover:text-white">
        <span className="text-[#168fff]">01</span> ABOUT
      </a>

      <a href="#experience" className="text-[#c8d0d8] hover:text-white">
        <span className="text-[#168fff]">02</span> EXPERIENCE
      </a>

      <a href="#skills" className="text-[#c8d0d8] hover:text-white">
        <span className="text-[#168fff]">03</span> SKILLS
      </a>

      <a href="#projects" className="text-[#c8d0d8] hover:text-white">
        <span className="text-[#168fff]">04</span> PROJECTS
      </a>

      <a href="#education" className="text-[#c8d0d8] hover:text-white">
        <span className="text-[#168fff]">05</span> EDUCATION
      </a>

      <a href="#contact" className="text-[#c8d0d8] hover:text-white">
        <span className="text-[#168fff]">06</span> CONTACT
      </a>

      <a
        href="https://github.com/supreeth"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white/15 px-4 py-3 text-white hover:border-[#168fff]/60"
      >
        GITHUB <span className="text-[#25d695]">●</span>
      </a>
    </div>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="xl:hidden border border-white/15 px-4 py-2 font-mono text-xs tracking-[0.15em]"
      aria-label="Toggle navigation"
    >
      {menuOpen ? "CLOSE ×" : "MENU ☰"}
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="xl:hidden px-[7%] py-6 border-t border-white/5 bg-[#071018]">
      <div className="flex flex-col gap-6 font-mono text-sm tracking-[0.15em]">
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-[#c8d0d8]"
        >
          <span className="text-[#168fff]">01</span> ABOUT
        </a>

        <a
          href="#experience"
          onClick={() => setMenuOpen(false)}
          className="text-[#c8d0d8]"
        >
          <span className="text-[#168fff]">02</span> EXPERIENCE
        </a>

        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
          className="text-[#c8d0d8]"
        >
          <span className="text-[#168fff]">03</span> SKILLS
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="text-[#c8d0d8]"
        >
          <span className="text-[#168fff]">04</span> PROJECTS
        </a>

        <a
          href="#education"
          onClick={() => setMenuOpen(false)}
          className="text-[#c8d0d8]"
        >
          <span className="text-[#168fff]">05</span> EDUCATION
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-[#c8d0d8]"
        >
          <span className="text-[#168fff]">06</span> CONTACT
        </a>

        <a
          href="https://github.com/supreeth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          GITHUB ↗
        </a>
      </div>
    </div>
  )}
</nav>
      {/* HERO */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center gap-12 lg:gap-[70px] px-[7%] pt-[130px] pb-20"
  style={{
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "1.3fr 0.7fr",
    alignItems: "center",
    gap: "70px",
    padding: "130px 7% 80px",
  }}
>
  {/* LEFT SIDE */}
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}>
    <p
      style={{
        color: "#27a7ff",
        letterSpacing: "6px",
        fontSize: "13px",
        marginBottom: "28px",
      }}
    >
      JAVA FULL STACK ENGINEER · PORTFOLIO V.2026
    </p>

    <h1
      style={{
        fontSize: "clamp(60px, 8vw, 120px)",
        lineHeight: "0.9",
        margin: 0,
        fontWeight: 800,
        letterSpacing: "-5px",
      }}
    >
      Supreeth
      <br />
      Kinnera<span style={{ color: "#168fff" }}>.</span>
    </h1>

    <p
      style={{
        marginTop: "34px",
        color: "#768493",
        letterSpacing: "4px",
        fontFamily: "monospace",
      }}
    >
      &gt; ROLE.TITLE
    </p>

    <h2
      style={{
        fontSize: "28px",
        marginTop: "18px",
        marginBottom: "22px",
      }}
    >
      Full Stack Java Developer{" "}
      <span style={{ color: "#168fff" }}>/</span>{" "}
      <span style={{ color: "#8d98a5" }}>
        Microservices & Cloud Engineer
      </span>
    </h2>

    <p
      style={{
        maxWidth: "720px",
        color: "#9aa8b5",
        lineHeight: "1.8",
        fontSize: "18px",
      }}
    >
      5+ years designing and developing scalable enterprise applications
      using Java 21/17, Spring Boot, Microservices, Kafka, React and AWS.
    </p>

    <div
      style={{
        display: "flex",
        gap: "16px",
        marginTop: "34px",
        flexWrap: "wrap",
      }}
    >
      <a
        href="#projects"
        style={{
          background: "#168fff",
          color: "#fff",
          padding: "15px 24px",
          textDecoration: "none",
          fontFamily: "monospace",
          fontWeight: 700,
        }}
      >
        VIEW PROJECTS ↓
      </a>

      <a
        href="https://github.com/supreethkinnera"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff",
          padding: "15px 24px",
          textDecoration: "none",
          fontFamily: "monospace",
        }}
      >
        GITHUB
      </a>

      <a
        href="https://www.linkedin.com/in/supreeth-kinnera-6a0736343"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff",
          padding: "15px 24px",
          textDecoration: "none",
          fontFamily: "monospace",
        }}
      >
        LINKEDIN
      </a>
    </div>

    <div
      style={{
        marginTop: "40px",
        display: "flex",
        gap: "24px",
        flexWrap: "wrap",
        color: "#778592",
        fontFamily: "monospace",
        letterSpacing: "2px",
        fontSize: "12px",
      }}
    >
      <span>
        <span style={{ color: "#168fff" }}>◎</span> UNITED STATES
      </span>

      <span>
        <span style={{ color: "#25d695" }}>●</span> AVAILABLE FOR OPPORTUNITIES
      </span>
    </div>
  </motion.div>

  {/* RIGHT SIDE - PHOTO CARD */}
  <motion.div
  className="flex justify-center items-center"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
  >
  
    <div className="w-full max-w-[390px] border border-[rgba(39,167,255,0.5)] p-[10px] bg-[rgba(0,0,0,0.25)] shadow-[0_0_50px_rgba(0,140,255,0.12)]"
      style={{
        width: "390px",
        maxWidth: "100%",
        border: "1px solid rgba(39,167,255,0.5)",
        padding: "10px",
        background: "rgba(0,0,0,0.25)",
        boxShadow: "0 0 50px rgba(0,140,255,0.12)",
      }}
    >
      <div
        style={{
          position: "relative",
          border: "8px solid #111820",
          background: "#ffffff",
        }}
      >
        {/* TOP LABELS */}
        <div
          style={{
            position: "absolute",
            zIndex: 5,
            top: "16px",
            left: "18px",
            right: "18px",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: "11px",
            letterSpacing: "3px",
          }}
        >
          <span style={{ color: "#25d695" }}>● LIVE</span>
          <span style={{ color: "#82909d" }}>ID · 2026</span>
        </div>

        {/* PHOTO */}
        <img
          src="/profile.jpg"
          alt="Supreeth Kinnera"
          style={{
            width: "100%",
            height: "520px",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />

        {/* DARK GRADIENT */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "150px",
            background:
              "linear-gradient(to top, rgba(5,12,18,0.98), rgba(5,12,18,0))",
          }}
        />

        {/* BOTTOM LABELS */}
        <div
          style={{
            position: "absolute",
            left: "18px",
            right: "18px",
            bottom: "18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 5,
            fontFamily: "monospace",
            letterSpacing: "2px",
            fontSize: "10px",
          }}
        >
          <span style={{ color: "#d7dde2" }}>NODE · SUPREETH</span>

          <span style={{ color: "#27a7ff" }}>
            STATUS: ONLINE
          </span>
        </div>
      </div>
    </div>
  </motion.div>
</section>
<motion.section
  id="about"
  className="min-h-screen px-[7%] py-28 border-t border-white/5"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <p className="font-mono text-sm tracking-[0.35em] text-[#168fff] mb-4">
        01 / ABOUT
      </p>

      <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
        Building scalable
        <br />
        <span className="text-[#7f8b96]">
          enterprise systems.
        </span>
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* LEFT */}
      <div>
        <p className="text-xl md:text-2xl leading-relaxed text-[#d6dde3]">
          I&apos;m a Full Stack Java Developer with 5+ years of experience
          designing and developing enterprise applications across investment
          management, financial services, healthcare supply chain, and
          consulting environments.
        </p>

        <p className="mt-8 text-[#8d9aa6] text-lg leading-8">
          My primary focus is building cloud-native backend systems using
          Java 21/17, Spring Boot, Spring Cloud, Microservices, Kafka, and
          modern API architectures.
        </p>

        <p className="mt-6 text-[#8d9aa6] text-lg leading-8">
          I also work across the full application stack using React, Angular,
          TypeScript, PostgreSQL, Redis, AWS, Docker, and Kubernetes.
        </p>
      </div>

      {/* RIGHT */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-white/10 bg-white/[0.02] p-7">
          <p className="font-mono text-[#168fff] text-xs tracking-[0.25em]">
            EXPERIENCE
          </p>

          <p className="text-4xl md:text-5xl font-bold mt-5">
            5+
          </p>

          <p className="text-[#7f8b96] mt-2">
            Years
          </p>
        </div>

        <div className="border border-white/10 bg-white/[0.02] p-7">
          <p className="font-mono text-[#168fff] text-xs tracking-[0.25em]">
            CORE
          </p>

          <p className="text-2xl md:text-3xl font-bold mt-5">
            Java
          </p>

          <p className="text-[#7f8b96] mt-2">
            21 / 17 / 11
          </p>
        </div>

        <div className="border border-white/10 bg-white/[0.02] p-7">
          <p className="font-mono text-[#168fff] text-xs tracking-[0.25em]">
            ARCHITECTURE
          </p>

          <p className="text-xl md:text-2xl font-bold mt-5">
            Microservices
          </p>

          <p className="text-[#7f8b96] mt-2">
            Event Driven
          </p>
        </div>

        <div className="border border-white/10 bg-white/[0.02] p-7">
          <p className="font-mono text-[#168fff] text-xs tracking-[0.25em]">
            CLOUD
          </p>

          <p className="text-2xl md:text-3xl font-bold mt-5">
            AWS
          </p>

          <p className="text-[#7f8b96] mt-2">
            EKS / ECS / Lambda
          </p>
        </div>
      </div>
    </div>

    {/* TECH STRIP */}
    <div className="mt-20 border-y border-white/10 py-6 overflow-hidden">
      <div className="flex flex-wrap gap-x-10 gap-y-4 font-mono text-sm tracking-[0.15em] text-[#778590]">
        <span>JAVA 21</span>
        <span>SPRING BOOT</span>
        <span>MICROSERVICES</span>
        <span>KAFKA</span>
        <span>REACT</span>
        <span>POSTGRESQL</span>
        <span>REDIS</span>
        <span>AWS</span>
        <span>KUBERNETES</span>
      </div>
    </div>
  </div>
</motion.section>
<motion.section
  id="experience"
  className="min-h-screen px-[7%] py-28 border-t border-white/5"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <p className="font-mono text-sm tracking-[0.35em] text-[#168fff] mb-4">
        02 / EXPERIENCE
      </p>

      <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
        Experience that
        <br />
        <span className="text-[#7f8b96]">
          scales.
        </span>
      </h2>
    </div>

    <div className="space-y-8">
      {/* T ROWE PRICE */}
      <div className="border border-white/10 bg-white/[0.02] p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
              01
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              T. Rowe Price
            </h3>

            <p className="text-[#9aa8b5] mt-2 text-lg">
              Full Stack Java Developer
            </p>
          </div>

          <p className="font-mono text-sm tracking-[0.18em] text-[#6f7c88]">
            OCT 2025 — PRESENT
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4 text-[#9aa8b5] leading-8">
            <p>
              Built enterprise-grade investment management and wealth
              management applications using Java 21, Spring Boot, Spring Cloud,
              and Microservices architecture.
            </p>

            <p>
              Developed secure REST APIs and gRPC services supporting portfolio
              management, investment analytics, account management, and
              transaction processing.
            </p>

            <p>
              Designed event-driven workflows using Kafka for real-time
              portfolio updates, market-data processing, trade execution, and
              asynchronous business events.
            </p>

            <p>
              Worked with AWS, Docker, Kubernetes, Terraform, PostgreSQL, Redis,
              and modern observability tooling for cloud-native deployments.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {[
              "JAVA 21",
              "SPRING BOOT",
              "SPRING CLOUD",
              "MICROSERVICES",
              "KAFKA",
              "REACT",
              "ANGULAR",
              "POSTGRESQL",
              "REDIS",
              "AWS",
              "DOCKER",
              "KUBERNETES",
              "TERRAFORM",
              "GENAI / RAG",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-3 py-2 font-mono text-xs tracking-[0.15em] text-[#8f9ca7]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MEDLINE */}
      <div className="border border-white/10 bg-white/[0.02] p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
              02
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              Medline
            </h3>

            <p className="text-[#9aa8b5] mt-2 text-lg">
              Full Stack Java Developer
            </p>
          </div>

          <p className="font-mono text-sm tracking-[0.18em] text-[#6f7c88]">
            AUG 2024 — SEP 2025
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4 text-[#9aa8b5] leading-8">
            <p>
              Developed cloud-native enterprise applications supporting
              inventory management, procurement, warehouse operations, and
              order fulfillment.
            </p>

            <p>
              Built scalable Spring Boot microservices and responsive React
              applications for inventory visibility, product management, and
              operational workflows.
            </p>

            <p>
              Used Kafka, RabbitMQ, AWS SQS, and SNS for real-time inventory
              synchronization, shipment tracking, order processing, and
              asynchronous communication.
            </p>

            <p>
              Implemented Redis caching, AWS services, Kubernetes, Terraform,
              CI/CD, centralized logging, and monitoring.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {[
              "JAVA 17",
              "SPRING BOOT",
              "MICROSERVICES",
              "REACT",
              "REDUX",
              "KAFKA",
              "RABBITMQ",
              "REDIS",
              "MONGODB",
              "AWS",
              "KUBERNETES",
              "TERRAFORM",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-3 py-2 font-mono text-xs tracking-[0.15em] text-[#8f9ca7]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* EY */}
      <div className="border border-white/10 bg-white/[0.02] p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
              03
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              Ernst & Young
            </h3>

            <p className="text-[#9aa8b5] mt-2 text-lg">
              Java Developer
            </p>
          </div>

          <p className="font-mono text-sm tracking-[0.18em] text-[#6f7c88]">
            JAN 2020 — AUG 2023
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4 text-[#9aa8b5] leading-8">
            <p>
              Developed and modernized enterprise applications using Java,
              Spring Boot, Spring Cloud, Hibernate, and Spring Data JPA.
            </p>

            <p>
              Built REST and GraphQL integrations, Angular applications,
              service discovery, centralized configuration, circuit breakers,
              and fault-tolerance patterns.
            </p>

            <p>
              Developed Kafka and RabbitMQ based event-driven workflows and
              optimized PostgreSQL and Oracle databases for transactional
              systems.
            </p>

            <p>
              Supported AWS migration, Docker and Kubernetes deployments,
              Terraform provisioning, CI/CD pipelines, and production
              observability.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {[
              "JAVA",
              "SPRING BOOT",
              "SPRING CLOUD",
              "ANGULAR",
              "GRAPHQL",
              "KAFKA",
              "RABBITMQ",
              "POSTGRESQL",
              "ORACLE",
              "AWS",
              "DOCKER",
              "KUBERNETES",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-3 py-2 font-mono text-xs tracking-[0.15em] text-[#8f9ca7]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.section>
<motion.section
  id="skills"
  className="min-h-screen px-[7%] py-28 border-t border-white/5"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <p className="font-mono text-sm tracking-[0.35em] text-[#168fff] mb-4">
        03 / SKILLS
      </p>

      <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
        Technical
        <br />
        <span className="text-[#7f8b96]">stack.</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* BACKEND */}
      <div className="border border-white/10 bg-white/[0.02] p-7">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          01 / BACKEND
        </p>

        <h3 className="text-2xl font-bold mt-4">
          Java Ecosystem
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Java 21",
            "Java 17",
            "Java 11",
            "Spring Boot",
            "Spring Cloud",
            "Spring MVC",
            "Spring Security",
            "Microservices",
            "Hibernate",
            "JPA",
            "Spring Data JPA",
            "Spring Batch",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* APIs */}
      <div className="border border-white/10 bg-white/[0.02] p-7">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          02 / APIs
        </p>

        <h3 className="text-2xl font-bold mt-4">
          Distributed Interfaces
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "REST",
            "GraphQL",
            "gRPC",
            "SOAP",
            "OAuth 2.0",
            "JWT",
            "SAML",
            "RBAC",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* FRONTEND */}
      <div className="border border-white/10 bg-white/[0.02] p-7">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          03 / FRONTEND
        </p>

        <h3 className="text-2xl font-bold mt-4">
          Web Applications
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "React",
            "Angular",
            "TypeScript",
            "JavaScript",
            "Redux",
            "Material UI",
            "RxJS",
            "HTML5",
            "CSS3",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* EVENT DRIVEN */}
      <div className="border border-white/10 bg-white/[0.02] p-7">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          04 / EVENT DRIVEN
        </p>

        <h3 className="text-2xl font-bold mt-4">
          Messaging
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Apache Kafka",
            "RabbitMQ",
            "AWS SQS",
            "AWS SNS",
            "Event-Driven Architecture",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* DATABASE */}
      <div className="border border-white/10 bg-white/[0.02] p-7">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          05 / DATA
        </p>

        <h3 className="text-2xl font-bold mt-4">
          Databases
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "PostgreSQL",
            "Oracle",
            "MongoDB",
            "Redis",
            "MySQL",
            "SQL Server",
            "DynamoDB",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* AWS */}
      <div className="border border-white/10 bg-white/[0.02] p-7">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          06 / CLOUD
        </p>

        <h3 className="text-2xl font-bold mt-4">
          AWS
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "EC2",
            "ECS",
            "EKS",
            "Lambda",
            "S3",
            "RDS",
            "IAM",
            "CloudWatch",
            "API Gateway",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* DEVOPS */}
      <div className="border border-white/10 bg-white/[0.02] p-7">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          07 / DEVOPS
        </p>

        <h3 className="text-2xl font-bold mt-4">
          Delivery & Infrastructure
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Docker",
            "Kubernetes",
            "OpenShift",
            "Terraform",
            "Helm",
            "Jenkins",
            "GitHub Actions",
            "GitLab CI/CD",
            "Maven",
            "Gradle",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* OBSERVABILITY */}
      <div className="border border-white/10 bg-white/[0.02] p-7">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          08 / OBSERVABILITY
        </p>

        <h3 className="text-2xl font-bold mt-4">
          Monitoring
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Prometheus",
            "Grafana",
            "ELK",
            "Splunk",
            "DataDog",
            "CloudWatch",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* AI */}
      <div className="border border-[#168fff]/30 bg-[#168fff]/[0.03] p-7">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          09 / GENAI
        </p>

        <h3 className="text-2xl font-bold mt-4">
          AI Engineering
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "OpenAI",
            "RAG",
            "LangChain",
            "LangGraph",
            "Vector Databases",
            "LLM Integration",
          ].map((item) => (
            <span
              key={item}
              className="border border-[#168fff]/20 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* BOTTOM STATUS BAR */}
    <div className="mt-14 border-y border-white/10 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-xs tracking-[0.18em]">
      <span className="text-[#6f7c88]">
        SYSTEM.STACK
      </span>

      <span className="text-[#25d695]">
        ● PRODUCTION READY
      </span>
    </div>
  </div>
</motion.section>
<motion.section
  id="projects"
  className="min-h-screen px-[7%] py-28 border-t border-white/5"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <p className="font-mono text-sm tracking-[0.35em] text-[#168fff] mb-4">
        04 / PROJECTS
      </p>

      <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
        Selected
        <br />
        <span className="text-[#7f8b96]">systems.</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* PROJECT 1 */}
      <div className="group border border-white/10 bg-white/[0.02] p-8 hover:border-[#168fff]/40 transition-all duration-300">
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
            PROJECT 01
          </p>

          <span className="text-[#25d695] font-mono text-xs">
            ● FEATURED
          </span>
        </div>

        <h3 className="text-3xl font-bold mt-6">
          Investment Transaction Platform
        </h3>

        <p className="mt-5 text-[#8f9ca7] leading-7">
          A distributed transaction-processing platform designed around
          Spring Boot microservices, Kafka event workflows, PostgreSQL,
          Redis caching, and a React frontend.
        </p>

        <div className="mt-7 border border-white/10 bg-black/20 p-5 font-mono text-xs text-[#74818c] leading-6">
          React
          <br />
          ↓
          <br />
          API Gateway
          <br />
          ↓
          <br />
          Spring Boot Microservices
          <br />
          ↓
          <br />
          Kafka
          <br />
          ↓
          <br />
          PostgreSQL + Redis
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Java 21",
            "Spring Boot",
            "Kafka",
            "PostgreSQL",
            "Redis",
            "React",
            "AWS",
            "Docker",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-5 font-mono text-xs tracking-[0.15em]">
          <a href="#" className="text-[#168fff] hover:text-white">
            VIEW PROJECT →
          </a>

          <a href="#" className="text-[#778590] hover:text-white">
            GITHUB ↗
          </a>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="group border border-white/10 bg-white/[0.02] p-8 hover:border-[#168fff]/40 transition-all duration-300">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          PROJECT 02
        </p>

        <h3 className="text-3xl font-bold mt-6">
          Real-Time Portfolio Dashboard
        </h3>

        <p className="mt-5 text-[#8f9ca7] leading-7">
          A real-time financial dashboard for portfolio positions,
          market-data updates, performance metrics, and transaction events.
        </p>

        <div className="mt-7 border border-white/10 bg-black/20 p-5 font-mono text-xs text-[#74818c] leading-6">
          Market Events
          <br />
          ↓
          <br />
          Kafka
          <br />
          ↓
          <br />
          Spring Boot
          <br />
          ↓
          <br />
          WebSocket / REST
          <br />
          ↓
          <br />
          React Dashboard
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "React",
            "Spring Boot",
            "Kafka",
            "WebSocket",
            "PostgreSQL",
            "Redis",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-5 font-mono text-xs tracking-[0.15em]">
          <a href="#" className="text-[#168fff] hover:text-white">
            VIEW PROJECT →
          </a>

          <a href="#" className="text-[#778590] hover:text-white">
            GITHUB ↗
          </a>
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="group border border-[#168fff]/20 bg-[#168fff]/[0.025] p-8 hover:border-[#168fff]/50 transition-all duration-300">
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
            PROJECT 03
          </p>

          <span className="text-[#168fff] font-mono text-xs">
            AI SYSTEM
          </span>
        </div>

        <h3 className="text-3xl font-bold mt-6">
          Enterprise RAG Assistant
        </h3>

        <p className="mt-5 text-[#8f9ca7] leading-7">
          An AI assistant that retrieves relevant enterprise information
          using embeddings and vector search before generating grounded
          responses with an LLM.
        </p>

        <div className="mt-7 border border-[#168fff]/20 bg-black/20 p-5 font-mono text-xs text-[#74818c] leading-6">
          Enterprise Documents
          <br />
          ↓
          <br />
          Chunking + Embeddings
          <br />
          ↓
          <br />
          Vector Database
          <br />
          ↓
          <br />
          Retriever
          <br />
          ↓
          <br />
          OpenAI LLM
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Spring Boot",
            "OpenAI",
            "RAG",
            "LangChain",
            "LangGraph",
            "Vector DB",
            "React",
          ].map((item) => (
            <span
              key={item}
              className="border border-[#168fff]/20 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-5 font-mono text-xs tracking-[0.15em]">
          <a href="#" className="text-[#168fff] hover:text-white">
            VIEW PROJECT →
          </a>

          <a href="#" className="text-[#778590] hover:text-white">
            GITHUB ↗
          </a>
        </div>
      </div>

      {/* PROJECT 4 */}
      <div className="group border border-white/10 bg-white/[0.02] p-8 hover:border-[#168fff]/40 transition-all duration-300">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          PROJECT 04
        </p>

        <h3 className="text-3xl font-bold mt-6">
          Inventory Management Platform
        </h3>

        <p className="mt-5 text-[#8f9ca7] leading-7">
          A cloud-native inventory and order-management platform supporting
          real-time stock synchronization, procurement, warehouse operations,
          and shipment workflows.
        </p>

        <div className="mt-7 border border-white/10 bg-black/20 p-5 font-mono text-xs text-[#74818c] leading-6">
          React
          <br />
          ↓
          <br />
          Spring Boot
          <br />
          ↓
          <br />
          Inventory Services
          <br />
          ↓
          <br />
          Kafka / RabbitMQ
          <br />
          ↓
          <br />
          PostgreSQL + Redis
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Java 17",
            "Spring Boot",
            "React",
            "Kafka",
            "RabbitMQ",
            "Redis",
            "AWS",
            "Kubernetes",
          ].map((item) => (
            <span
              key={item}
              className="border border-white/10 px-3 py-2 text-xs font-mono text-[#9aa8b5]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-5 font-mono text-xs tracking-[0.15em]">
          <a href="#" className="text-[#168fff] hover:text-white">
            VIEW PROJECT →
          </a>

          <a href="#" className="text-[#778590] hover:text-white">
            GITHUB ↗
          </a>
        </div>
      </div>
    </div>
  </div>
</motion.section>
<motion.section
  id="education"
  className="min-h-screen px-[7%] py-28 border-t border-white/5"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <p className="font-mono text-sm tracking-[0.35em] text-[#168fff] mb-4">
        05 / EDUCATION
      </p>

      <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
        Education &
        <br />
        <span className="text-[#7f8b96]">foundation.</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="border border-white/10 bg-white/[0.02] p-8">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          01 / MASTER&apos;S
        </p>

        <h3 className="text-3xl font-bold mt-5">
          Master of Information Technology and Management
        </h3>

        <p className="text-[#9aa8b5] text-lg mt-4">
          Belhaven University
        </p>

        <p className="font-mono text-sm tracking-[0.18em] text-[#6f7c88] mt-6">
          AUG 2023 — APR 2025
        </p>
      </div>

      <div className="border border-white/10 bg-white/[0.02] p-8">
        <p className="font-mono text-xs tracking-[0.3em] text-[#168fff]">
          02 / BACHELOR&apos;S
        </p>

        <h3 className="text-3xl font-bold mt-5">
          Bachelor&apos;s in Information Technology
        </h3>

        <p className="text-[#9aa8b5] text-lg mt-4">
          Vasavi College of Engineering
        </p>

        <p className="font-mono text-sm tracking-[0.18em] text-[#6f7c88] mt-6">
          AUG 2016 — JUL 2020
        </p>
      </div>
    </div>
  </div>
</motion.section>

<motion.section
  id="contact"
  className="min-h-screen px-[7%] py-28 border-t border-white/5"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <div className="max-w-6xl mx-auto">
    <p className="font-mono text-sm tracking-[0.35em] text-[#168fff] mb-4">
      06 / CONTACT
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-end">
      <div>
        <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95]">
          Let&apos;s build
          <br />
          <span className="text-[#7f8b96]">
            something.
          </span>
        </h2>

        <p className="text-[#8f9ca7] text-lg leading-8 mt-8 max-w-2xl">
          I&apos;m open to Full Stack Java, backend, microservices, cloud,
          and distributed-systems opportunities.
        </p>
      </div>

      <div className="space-y-4">
        <a
          href="mailto:supreethh46@gmail.com"
          className="block border border-white/10 p-5 hover:border-[#168fff]/50 transition-colors"
        >
          <p className="font-mono text-xs tracking-[0.25em] text-[#6f7c88]">
            EMAIL
          </p>

          <p className="text-lg mt-2">
            supreethh46@gmail.com
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/supreeth-kinnera-6a0736343"
         target="_blank"
         rel="noopener noreferrer"
         className="block border border-white/10 p-5 hover:border-[#168fff]/50 transition-colors"
        >
          <p className="font-mono text-xs tracking-[0.25em] text-[#6f7c88]">
            LINKEDIN
          </p>

          <p className="text-lg mt-2">
            Connect on LinkedIn →
          </p>
        </a>
        <a
          href="https://github.com/supreethkinnera"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-white/10 p-5 hover:border-[#168fff]/50 transition-colors"
        >
          <p className="font-mono text-xs tracking-[0.25em] text-[#6f7c88]">
            GITHUB
          </p>

          <p className="text-lg mt-2">
            View GitHub →
          </p>
        </a>

        <a
          href="/Supreeth-Kinnera-Resume.pdf"
          target="_blank"
          className="block bg-[#168fff] text-white p-5 font-mono tracking-[0.15em] text-sm font-bold hover:bg-[#0f7ee8] transition-colors"
        >
          VIEW RESUME ↗
        </a>
      </div>
    </div>

    <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <p className="font-mono text-xs tracking-[0.2em] text-[#56636e]">
        SUPREETH / JAVA-FULL-STACK
      </p>

      <p className="font-mono text-xs tracking-[0.2em] text-[#56636e]">
        PORTFOLIO · 2026
      </p>
    </div>
  </div>
</motion.section>
    </main>
  );
}