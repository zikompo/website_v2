"use client";
import React from "react";
import Layout from "../components/Layout";

const ReadingPage = () => {
    return (
        <div
            className="flex flex-col min-h-screen font-crimson-pro text-[23px]">
            <Layout>
                <div className="space-y-8 py-16">
                    <h1 className="text-4xl font-bold font-grotesk text-center">Reading List</h1>
                    <p className="text-xl">
                        Reviews are a work in progress, but I&apos;m currently reading the following books:
                    </p>
                    <div className="pt-4 text-xl">
                        <ul className="list-disc list-inside space-y-4">
                            <li><i>Why Nations Fail</i><span className="ml-1"> by Daron Acemoglu and James A. Robinson</span></li>
                            <li><i>The Tartar Steppe</i><span className="ml-1"> by Dino Buzzati</span></li>
                        </ul>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default ReadingPage; 