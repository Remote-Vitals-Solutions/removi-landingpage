'use client';

import { useState } from 'react';

// TODO: Replace with your Formspree endpoint, e.g. 'https://formspree.io/f/abcdwxyz'.
// Create a free form at https://formspree.io and paste the ID below.
// Both the contact form and the newsletter post here; a hidden "form-type"
// field tells them apart in your inbox.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const isConfigured = !FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID');

type Status = 'idle' | 'submitting' | 'success' | 'error';

async function postToFormspree(data: FormData): Promise<boolean> {
  if (!isConfigured) {
    // Surface clearly during development that the endpoint isn't wired yet.
    console.warn('Formspree endpoint not configured — set FORMSPREE_ENDPOINT in Forms.tsx');
    return false;
  }
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: data,
    headers: { Accept: 'application/json' },
  });
  return res.ok;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const ok = await postToFormspree(new FormData(e.currentTarget));
    setStatus(ok ? 'success' : 'error');
    if (ok) e.currentTarget.reset();
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-3xl p-8 bg-white max-w-xl"
        style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
      >
        <p className="font-semibold text-base mb-1" style={{ color: '#1d1d1f' }}>
          Thank you — your message is on its way.
        </p>
        <p className="text-sm" style={{ color: '#6e6e73' }}>
          We will get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl flex flex-col gap-4">
      <input type="hidden" name="form-type" value="contact" />
      <input type="hidden" name="_subject" value="New Removi contact" />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field name="name" label="Name" required />
        <Field name="email" label="Email" type="email" required />
      </div>
      <Field name="organisation" label="Organisation / role" placeholder="e.g. cardiologist, hospital, investor" />
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-medium" style={{ color: '#6e6e73' }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="rounded-2xl px-4 py-3 text-sm bg-white border outline-none transition-colors focus:border-[#27B9B6]"
          style={{ borderColor: '#e8e8ed', color: '#1d1d1f' }}
        />
      </div>
      <div className="flex items-center gap-4 mt-1">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="px-9 py-3.5 rounded-full font-medium text-sm text-white transition-opacity hover:opacity-80 disabled:opacity-50"
          style={{ backgroundColor: '#E151B2' }}
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'error' && (
          <span className="text-sm" style={{ color: '#E151B2' }}>
            Something went wrong. Please try again or email us directly.
          </span>
        )}
      </div>
    </form>
  );
}

export function Newsletter() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const ok = await postToFormspree(new FormData(e.currentTarget));
    setStatus(ok ? 'success' : 'error');
    if (ok) e.currentTarget.reset();
  }

  return (
    <section id="newsletter" className="scroll-mt-24 py-20 px-6" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] mb-5" style={{ color: '#27B9B6' }}>
          Stay in the loop
        </p>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4" style={{ color: '#1d1d1f' }}>
          Keep me updated.
        </h2>
        <p className="leading-relaxed text-sm md:text-base mb-8" style={{ color: '#6e6e73' }}>
          Get occasional updates on our progress toward continuous cardiac monitoring — no spam.
        </p>

        {status === 'success' ? (
          <p className="font-medium text-base" style={{ color: '#27B9B6' }}>
            You&apos;re on the list — thank you.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="hidden" name="form-type" value="newsletter" />
            <input type="hidden" name="_subject" value="New Removi newsletter signup" />
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="flex-1 rounded-full px-5 py-3 text-sm bg-white border outline-none transition-colors focus:border-[#27B9B6]"
              style={{ borderColor: '#e8e8ed', color: '#1d1d1f' }}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-7 py-3 rounded-full font-medium text-sm text-white transition-opacity hover:opacity-80 disabled:opacity-50 whitespace-nowrap"
              style={{ backgroundColor: '#27B9B6' }}
            >
              {status === 'submitting' ? 'Joining…' : 'Keep me updated'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-sm mt-3" style={{ color: '#E151B2' }}>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required = false,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs font-medium" style={{ color: '#6e6e73' }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl px-4 py-3 text-sm bg-white border outline-none transition-colors focus:border-[#27B9B6]"
        style={{ borderColor: '#e8e8ed', color: '#1d1d1f' }}
      />
    </div>
  );
}
