import React from 'react';
import Container from "@/components/ui/container/Container";
import ContactIndex from '@/components/section/contact/Index';
function page() {
  return (
    <section className="py-14 ">
      <Container>
        <ContactIndex />
      </Container>
    </section>
  );
}

export default page
