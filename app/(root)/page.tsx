import React from 'react'
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import { dummyInterviews } from '@/constants';

import { Button } from "@/components/ui/button";
// import { Section } from 'lucide-react';

const page = () => {
  return (
    <>
    <section className='flex flex-row blue-gradient-dark rounded-3xl px-16 py-6 items-center justify-between max-sm:px-4'>
    <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="w-fit !bg-primary-200 !text-dark-100 hover:!bg-primary-200/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10 max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
    </section>



    <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch">
          {/* {hasPastInterviews ? (
            userInterviews? */}
            {dummyInterviews.map((interview) => (
              <InterviewCard  {...interview}
                key={interview.id}
                // userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
               />
            )
          ) }
            {/* <p>You haven&apos;t taken any interviews yet</p> */}
          
        </div>
      </section>



      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch">
        {dummyInterviews.map((interview) => (
              <InterviewCard  {...interview}
                key={interview.id}
                // userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
               />
            )
          ) }
        </div>
      </section>
    </>
  )
}

export default page
