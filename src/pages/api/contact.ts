import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, phone, email, service, location, cityZip, details, message } = data;

    // GoHighLevel API Credentials from Environment Variables
    const GHL_API_KEY = import.meta.env.GHL_API_KEY || import.meta.env.PUBLIC_GHL_API_KEY;
    const GHL_LOCATION_ID = import.meta.env.GHL_LOCATION_ID || import.meta.env.PUBLIC_GHL_LOCATION_ID || 'HGzfx6jbKe9Um66xPWLa';

    const rawMessage = message || details || 'N/A';
    const userLocation = location || cityZip || 'N/A';
    const selectedService = service || 'General Flooring Inquiry';

    // Separate name into first & last
    const nameParts = (name || 'Website Lead').trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';

    // Send lead data directly to GoHighLevel API (Free - No Premium Webhook needed)
    if (GHL_API_KEY) {
      const ghlPayload = {
        firstName,
        lastName,
        name: name || `${firstName} ${lastName}`.trim(),
        email: email || '',
        phone: phone || '',
        locationId: GHL_LOCATION_ID,
        address1: userLocation,
        tags: ['website-lead', 'astro-form-lead', service ? `service-${service}` : 'general-quote'],
        source: 'CFS Flooring Website',
        customFields: [
          { key: 'flooring_service', value: selectedService },
          { key: 'project_details', value: rawMessage },
        ],
      };

      await fetch('https://services.leadconnectorhq.com/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GHL_API_KEY}`,
          Version: '2021-07-28',
        },
        body: JSON.stringify(ghlPayload),
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Lead received successfully.' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to process lead.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
