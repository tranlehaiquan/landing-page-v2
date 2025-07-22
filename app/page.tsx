import { Suspense } from 'react';
import { CTA, FAQ, Feature, Hero, Preview, SocialProof } from '@/components';
import { Applications } from '@/components/cache/apps';
import { Pricing } from '@/components/cache/pricing';

export default function Home() {
    return (
        <>
            <Hero />
            <Feature />
            <Suspense fallback={<div>Loading Applications...</div>}>
                <Applications />
            </Suspense>
            <Suspense fallback={<div>Loading Pricing...</div>}>
                <Pricing />
            </Suspense>
            <Preview />
            <SocialProof />
            <FAQ />
            <CTA />
        </>
    );
}
