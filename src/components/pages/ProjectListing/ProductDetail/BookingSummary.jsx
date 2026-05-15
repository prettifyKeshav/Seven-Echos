"use client";
import { useState } from "react";
import styles from "@/components/pages/ProjectListing/ProductDetail/BookingSummary.module.css";

export default function BookingSummary() {
  const [promoCode, setPromoCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("Full meal included");

  const handleRemoveCoupon = () => setAppliedCoupon(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        {/* Check-in / Check-out */}
        <div className={styles.datesRow}>
          <div className={styles.dateBlock}>
            <div className={styles.dateLabel}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Check-in
            </div>
            <div className={styles.dateValue}>08/4/2026</div>
            <div className={styles.timeValue}>02:30 PM</div>
          </div>

          <div className={styles.dateDivider} />

          <div className={styles.dateBlock}>
            <div className={styles.dateLabel}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Check-out
            </div>
            <div className={styles.dateValue}>09/4/2026</div>
            <div className={styles.timeValue}>10:00 AM</div>
          </div>
        </div>

        {/* Guests */}
        <div className={styles.guestsRow}>
          <span className={styles.guestsLabel}>Villa and Guests</span>
          <span className={styles.guestsValue}>1 Villa, 2 adults</span>
        </div>

        <div className={styles.divider} />

        {/* Promo Code */}
        <div className={styles.promoRow}>
          <input
            className={styles.promoInput}
            type="text"
            placeholder="Enter Promo Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>

        {/* View Coupons */}
        <button className={styles.couponsBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
          View Coupons
        </button>

        {/* Applied Coupon */}
        {appliedCoupon && (
          <div className={styles.couponTag}>
            <span>{appliedCoupon}</span>
            <button className={styles.couponRemove} onClick={handleRemoveCoupon} aria-label="Remove coupon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
          </div>
        )}

        {/* Cancellation Policy */}
        <p className={styles.policy}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 5 }}>
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 .49-3.51" />
          </svg>
          For cancellation and Refund Policy,{" "}
          <a href="#" className={styles.policyLink}>Click Here</a>
        </p>

        {/* Total */}
        <div className={styles.totalRow}>
          <div>
            <span className={styles.totalLabel}>Total:</span>
            <button className={styles.seeDetails}>See Details</button>
          </div>
          <div className={styles.totalPrice}>
            ₹25,000 <span className={styles.taxNote}>(Incl. taxes)</span>
          </div>
        </div>

        {/* Book Now */}
        <button className={styles.bookBtn}>Book Now</button>

        {/* Connect With Host */}
        <button className={styles.hostBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Connect With Your Host
        </button>
      </div>
    </div>
  );
}
