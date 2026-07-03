import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  PlugZap,
  Gauge,
  Wrench,
  Cable,
  Lightbulb,
  TreePine,
  Fan,
  Plug,
  Wifi,
  ShieldCheck,
  BatteryCharging,
  AlarmSmoke,
  ClipboardCheck,
  Hammer,
  CircuitBoard,
  LampCeiling,
  Building2,
  Store,
  CarFront,
  DoorOpen,
  Network,
  SquareParking,
  Power,
  Settings,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { businessConfig } from "@/config/business";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

/** Maps the `icon` keys in navigation.ts to lucide components */
const navIcons: Record<string, LucideIcon> = {
  "plug-zap": PlugZap,
  gauge: Gauge,
  wrench: Wrench,
  cable: Cable,
  lightbulb: Lightbulb,
  "tree-pine": TreePine,
  fan: Fan,
  plug: Plug,
  wifi: Wifi,
  "shield-check": ShieldCheck,
  "battery-charging": BatteryCharging,
  "alarm-smoke": AlarmSmoke,
  "clipboard-check": ClipboardCheck,
  hammer: Hammer,
  "circuit-board": CircuitBoard,
  "lamp-ceiling": LampCeiling,
  "building-2": Building2,
  store: Store,
  "car-front": CarFront,
  "door-open": DoorOpen,
  network: Network,
  "square-parking": SquareParking,
  power: Power,
  settings: Settings,
  "map-pin": MapPin,
};

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

function Button({
  children,
  href,
  size = "md",
  className,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
    "bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md",
    sizes[size],
    className
  );
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

function Logo({ light }: { light: boolean }) {
  return (
    <a href="/" className="flex shrink-0 items-center" aria-label="The Speedy Sparky LLC — Home">
      <img
        src={light ? "/images/logo-white.png" : "/images/logo.png"}
        alt="The Speedy Sparky LLC logo"
        width={83}
        height={80}
        className="h-16 w-auto lg:h-20"
      />
    </a>
  );
}

function MobileMenu({
  isOpen,
  onClose,
  openDropdown,
  setOpenDropdown,
}: {
  isOpen: boolean;
  onClose: () => void;
  openDropdown: string | null;
  setOpenDropdown: (v: string | null) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 top-20 z-[9999] overflow-y-auto bg-white transition-opacity duration-300 lg:hidden",
        isOpen
          ? "visible opacity-100"
          : "invisible opacity-0 pointer-events-none"
      )}
    >
      <div className="border-t border-border" />
      <div className="flex flex-col gap-1 p-6">
        {mainNav.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                  className="flex w-full items-center justify-between py-3 text-lg font-medium text-foreground"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openDropdown === item.label && "rotate-180"
                    )}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="ml-4 flex flex-col gap-1 border-l-2 border-primary-100 pl-4">
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="py-2 text-base font-semibold text-primary-600 transition-colors hover:text-primary-700"
                    >
                      View All {item.label}
                    </a>
                    {item.children.map((child) => {
                      const Icon = child.icon ? navIcons[child.icon] : undefined;
                      return (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="flex items-center gap-2.5 py-2 text-base text-muted transition-colors hover:text-primary-600"
                        >
                          {Icon && (
                            <Icon className="h-4 w-4 shrink-0 text-primary-500" />
                          )}
                          {child.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <a
                href={item.href}
                onClick={onClose}
                className="block py-3 text-lg font-medium text-foreground transition-colors hover:text-primary-600"
              >
                {item.label}
              </a>
            )}
          </div>
        ))}

        <hr className="my-4 border-border" />

        <a
          href={`tel:${businessConfig.phoneRaw}`}
          className="flex items-center gap-2 py-3 text-lg font-medium text-foreground"
        >
          <Phone className="h-5 w-5 text-primary-600" />
          {businessConfig.phone}
        </a>

        <Button href="/contact" className="mt-2 w-full" onClick={onClose}>
          Get a Free Quote
        </Button>
      </div>
    </div>,
    document.body
  );
}

interface HeaderProps {
  /** "landing" renders a minimal conversion-focused header: logo + phone + CTA, no nav */
  variant?: "default" | "landing";
}

export function Header({ variant = "default" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isLanding = variant === "landing";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Landing pages have a light hero, so the header is always solid
  const solid = isLanding || scrolled || mobileOpen;

  if (isLanding) {
    return (
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 shadow-header backdrop-blur-md">
        <Container>
          <nav className="flex h-20 items-center justify-between lg:h-24">
            <Logo light={false} />
            <div className="flex items-center gap-3 sm:gap-5">
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary-600 sm:text-base"
              >
                <Phone className="h-5 w-5 text-primary-600" />
                <span className="hidden sm:inline">{businessConfig.phone}</span>
                <span className="sm:hidden">Call Now</span>
              </a>
              <Button href="#quote" size="sm">
                Get a Free Quote
              </Button>
            </div>
          </nav>
        </Container>
      </header>
    );
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
          solid ? "bg-white/95 backdrop-blur-md shadow-header" : "bg-transparent"
        )}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between lg:h-24">
            <Logo light={!solid} />

            {/* Desktop Navigation */}
            <div className="hidden items-center lg:flex">
              {mainNav.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <div
                      className="group"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <a
                        href={item.href}
                        className={cn(
                          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
                          solid
                            ? "text-foreground-light hover:text-primary-600"
                            : "text-white/90 hover:text-white"
                        )}
                      >
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5" />
                      </a>
                      {/* pt-3 keeps an unbroken hover path between trigger and panel */}
                      <div
                        className={cn(
                          "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                          openDropdown === item.label
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0 pointer-events-none"
                        )}
                      >
                        <div className="overflow-hidden rounded-2xl border border-border/60 bg-white p-3 shadow-card-hover">
                          <div
                            className={cn(
                              "grid gap-x-2 gap-y-0.5",
                              // Narrower at lg so centered panels clear the
                              // viewport edges on 1024px screens
                              item.columns === 3
                                ? "w-[512px] grid-cols-3 xl:w-[560px]"
                                : "w-[512px] grid-cols-2 xl:w-[600px]"
                            )}
                          >
                            {item.children.map((child) => {
                              const Icon = child.icon
                                ? navIcons[child.icon]
                                : undefined;
                              // Areas list is long, so it gets a compact
                              // inline-pin row instead of an icon tile
                              return item.columns === 3 ? (
                                <a
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-foreground-light transition-colors hover:bg-primary-50 hover:text-primary-700"
                                >
                                  {Icon && (
                                    <Icon className="h-4 w-4 shrink-0 text-primary-500" />
                                  )}
                                  {child.label}
                                </a>
                              ) : (
                                <a
                                  key={child.href}
                                  href={child.href}
                                  className="group/item flex items-center gap-2.5 rounded-lg px-2 py-2 text-[13px] font-medium whitespace-nowrap text-foreground-light transition-colors hover:bg-primary-50 hover:text-primary-700 xl:gap-3 xl:px-2.5 xl:text-sm"
                                >
                                  {Icon && (
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover/item:bg-primary-100 xl:h-9 xl:w-9">
                                      <Icon className="h-4 w-4" />
                                    </span>
                                  )}
                                  {child.label}
                                </a>
                              );
                            })}
                          </div>
                          <a
                            href={item.href}
                            className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border-t border-border/60 px-3 pt-3 pb-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                          >
                            View All{" "}
                            {item.label === "Service Areas"
                              ? "Service Areas"
                              : `${item.label} Services`}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={cn(
                        "px-3 py-2 text-sm font-medium transition-colors",
                        solid
                          ? "text-foreground-light hover:text-primary-600"
                          : "text-white/90 hover:text-white"
                      )}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className={cn(
                  "hidden items-center gap-2 text-sm font-medium transition-colors xl:flex",
                  solid
                    ? "text-foreground-light hover:text-primary-600"
                    : "text-white/90 hover:text-white"
                )}
              >
                <Phone className="h-4 w-4" />
                {businessConfig.phone}
              </a>
              <Button href="/contact" size="sm">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors",
                solid ? "text-foreground" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu — rendered via portal to document.body */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
    </>
  );
}
