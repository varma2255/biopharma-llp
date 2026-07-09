"use client";

export default function PageLoader() {
  return (
    <div className="loader-overlay">
      <div className="logo-wrapper">
        <img
          src="/logo.png"
          alt="Loading"
          className="logo-loader"
        />
      </div>
    </div>
  );
}