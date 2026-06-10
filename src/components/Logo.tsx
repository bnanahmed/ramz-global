"use client";

interface LogoProps {
  size?: number;
  showText?: boolean;
  variant?: "horizontal" | "vertical" | "icon-only";
  theme?: "light" | "dark";
  className?: string;
}

export default function Logo({
  size = 72,
  showText = true,
  variant = "horizontal",
  theme = "light",
  className = "",
}: LogoProps) {
  const isVertical = variant === "vertical";
  const isIconOnly = variant === "icon-only";

  // الجزء المتغير من الأيقونة (أبيض في الداكن، كحلي في الفاتح)
  const shapeColor = theme === "dark" ? "#FFFFFF" : "#1A1A2E";
  // لون النص
  const textColor = theme === "dark" ? "#FFFFFF" : "#1A1A2E";

  // أحجام الأيقونة
  const iconW = size;
  const iconH = size * 1.1;

  // أحجام النص متناسبة مع الأيقونة
  const arabicFontSize = isVertical ? size * 0.42 : size * 0.36;
  const englishFontSize = isVertical ? size * 0.27 : size * 0.23;

  return (
    <div
      className={`
        inline-flex
        ${isVertical ? "flex-col items-center text-center" : "flex-row items-center"}
        gap-3 sm:gap-4
        ${className}
      `}
    >
      {/* ═══════════════════════════════════════════════════
          ICON – SVG مطابق للأصل
      ═══════════════════════════════════════════════════ */}
      <div
        className="relative shrink-0"
        style={{ width: iconW, height: iconH }}
      >
        <svg
          viewBox="0 0 200 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%", overflow: "visible" }}
        >
          {/* ── ❶ الشريط البرتقالي (الجزء الخلفي السفلي) ─────────── */}
          <polygon
            points="100,180 165,115 100,50 100,84 131,115 100,146 69,115 35,115"
            fill="#E8500A"
          />

          {/* ── ❷ الشريط الداكن/الفاتح (الجزء الأمامي العلوي) ──────────── */}
          <polygon
            points="100,10 35,75 100,140 100,106 69,75 100,44 131,75 165,75"
            fill={shapeColor}
          />

          {/* ── ❸ التداخل الأمامي البرتقالي (الذيل الأيسر السفلي) ── */}
          <polygon
            points="100,180 35,115 69,115 100,146"
            fill="#E8500A"
          />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════
          TEXT BLOCK
      ═══════════════════════════════════════════════════ */}
      {!isIconOnly && showText && (
        <div
          className={`
            flex flex-col
            ${isVertical ? "items-center text-center" : "items-start"}
          `}
          style={{ justifyContent: "center", gap: `${size * 0.04}px` }}
        >
          {/* ── النص العربي ─────────────────────────────────────── */}
          <h1
            dir="rtl"
            style={{
              color: textColor,
              fontFamily: '"Cairo", "IBM Plex Sans Arabic", "Tahoma", sans-serif',
              fontWeight: 700,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
              fontSize: `${arabicFontSize}px`,
              margin: 0,
              padding: 0,
            }}
          >
            الرمز العالمي للمقاولات
          </h1>

          {/* ── النص الإنجليزي ──────────────────────────────────── */}
          <p
            style={{
              color: textColor,
              fontFamily: '"Inter", "Segoe UI", "Helvetica Neue", sans-serif',
              letterSpacing: "0em",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
              fontSize: `${englishFontSize}px`,
              margin: 0,
              padding: 0,
            }}
          >
            <span style={{ fontWeight: 800 }}>Global Icon</span>
            <span style={{ fontWeight: 400 }}> Constructions</span>
          </p>
        </div>
      )}
    </div>
  );
}