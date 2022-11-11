import React from "react";
import useTitle from "../../Hook/DocumentTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Blogify
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Difference between SQL and NoSQL
              </p>
              <p className="text-gray-700">
                When choosing a modern database, one of the biggest decisions is
                picking a relational (SQL) or non-relational (NoSQL) data
                structure. While both are viable options, there are key
                differences between the two that users must keep in mind when
                making a decision. Here, we break down the most important
                distinctions and discuss the best SQL and NoSQL database systems
                available. The five critical differences between SQL vs NoSQL
                are: SQL databases are relational, NoSQL databases are
                non-relational. SQL databases use structured query language and
                have a predefined schema. NoSQL databases have dynamic schemas
                for unstructured data. SQL databases are vertically scalable,
                while NoSQL databases are horizontally scalable. SQL databases
                are table-based, while NoSQL databases are document, key-value,
                graph, or wide-column stores. SQL databases are better for
                multi-row transactions, while NoSQL is better for unstructured
                data like documents or JSON.
                <br />
                <br />
                Many say exploration is part of our destiny, but it’s actually
                our duty to future generations.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What is JWT, and how does it work?
              </p>
              <p className="text-gray-700">
                JSON Web Token (JWT) is an open standard (RFC 7519) that defines
                a compact and self-contained way for securely transmitting
                information between parties as a JSON object. This information
                can be verified and trusted because it is digitally signed. JWTs
                can be signed using a secret (with the HMAC algorithm) or a
                public/private key pair using RSA or ECDSA. Although JWTs can be
                encrypted to also provide secrecy between parties, we will focus
                on signed tokens. Signed tokens can verify the integrity of the
                claims contained within it, while encrypted tokens hide those
                claims from other parties. When tokens are signed using
                public/private key pairs, the signature also certifies that only
                the party holding the private key is the one that signed it
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                What is the difference between javascript and NodeJS?
              </p>
              <p className="text-gray-700">
                1. JavaScript is a client-side scripting language that is
                lightweight, cross-platform, and interpreted. Both Java and HTML
                include it. Node.js, on the other hand, is a V8-based
                server-side programming language. As a result, it is used to
                create network-centric applications. It's a networked system
                made for data-intensive real-time applications. If we compare
                node js vs. python, it is clear that node js will always be the
                preferred option. 2. JavaScript is a simple programming language
                that can be used with any browser that has the JavaScript Engine
                installed. Node.js, on the other hand, is an interpreter or
                execution environment for the JavaScript programming language.
                It requires libraries that can be conveniently accessed from
                JavaScript programming to be more helpful. 3. Any engine may run
                JavaScript. As a result, writing JavaScript is incredibly easy,
                and any working environment is similar to a complete browser.
                Node.js, on the other hand, only enables the V8 engine. Written
                JavaScript code, on the other hand, can run in any context,
                regardless of whether the V8 engine is supported. 4. A specific
                non-blocking operation is required to access any operating
                system. There are a few essential objects in JavaScript, but
                they are entirely OS-specific. Node.js, on the other hand, can
                now operate non-blocking software tasks out of any JavaScript
                programming. It contains no OS-specific constants. Node.js
                establishes a strong relationship with the system files,
                allowing companies to read and write to the hard drive.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                How does NodeJS handle multiple requests at the same time?
              </p>
              <p className="text-gray-700">
                We know NodeJS application is single-threaded. Say, if
                processing involves request A that takes 10 seconds, it does not
                mean that a request which comes after this request needs to wait
                10 seconds to start processing because NodeJS event loops are
                only single-threaded. The entire NodeJS architecture is not
                single-threaded. How NodeJS handle multiple client requests?
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
