
# BB Minerals and Metals – Developer Implementation Guide

---

## GLOBAL CHANGES (Apply across all pages)

### Meta Tags
```html
<title>BB Minerals and Metals | Leading Ferro Alloys Manufacturer in India</title>
<meta name="description" content="BB Minerals and Metals is a premier manufacturer and exporter of high-quality ferro alloys and metal products based in Nagpur, India. We offer superior-grade ferro manganese, silico manganese, and more.">
<meta name="keywords" content="Ferro Alloys, Silico Manganese, Ferro Manganese, Ferro Silicon, Metal Manufacturer, Indian Ferro Alloys Exporter, BBMAM">
<meta property="og:title" content="BB Minerals and Metals | Ferro Alloys Exporter">
<meta property="og:description" content="Leading manufacturer and supplier of ferro alloys in India with global export capabilities.">
<meta property="og:image" content="https://bb-minerals-metals.vercel.app/path-to-logo.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Home Page (/)

- **Hero Image alt text**: `alt="BB Minerals and Metals – India’s leading ferro alloy producer"`
- **<h1>**: BB Minerals and Metals – India's Trusted Ferro Alloys Partner
- Add scroll animations for "Our Products", "About Us"
- Add a short explainer video/graphic

---

## About Page (/about)

- **<h1>**: About BB Minerals and Metals
- **Meta Tags**:
```html
<title>About BB Minerals and Metals</title>
<meta name="description" content="Discover BB Minerals and Metals – a legacy of quality, innovation, and leadership in ferro alloy manufacturing in India.">
```
- **Alt Texts**:
  - Vision: `alt="BB Minerals vision of becoming India's top ferro alloy exporter"`
  - Mission: `alt="Mission to maintain global quality standards in metal production"`

---

## Products Page (/products)

- **<h1>**: Our Ferro Alloy Products
- **Meta Tags**:
```html
<title>Ferro Alloy Products | BB Minerals and Metals</title>
<meta name="description" content="Explore our range of high-grade ferro alloys including Ferro Manganese, Silico Manganese, and more. Quality guaranteed.">
```
- **Alt Texts**:
  - Ferro Manganese: `alt="Ferro Manganese – High carbon alloy for steel industry"`
  - Silico Manganese: `alt="Silico Manganese – Used in deoxidizing steel"`
- Implement schema markup (JSON-LD)

---

## Contact Page (/contact)

- **Meta Tags**:
```html
<title>Contact BB Minerals and Metals</title>
<meta name="description" content="Get in touch with BB Minerals and Metals. Reach out for inquiries, orders, or business collaborations.">
```
- Ensure all input labels use `for` attributes
- Add placeholder text

```html
<label for="email">Email</label>
<input type="email" id="email" placeholder="Enter your email">
```

---

## Performance Optimizations

- Convert images to WebP
- Compress under 100kb
- Minify CSS/JS
- Use lazy loading: `loading="lazy"`

---

## Accessibility Improvements

- Use `aria-labels`
- Ensure WCAG 2.1 contrast
- Keyboard navigation

---

## Technical SEO

- Add robots.txt:
```txt
User-agent: *
Disallow:
Sitemap: https://bb-minerals-metals.vercel.app/sitemap.xml
```
- Generate sitemap.xml via xml-sitemaps.com

---

## Tracking & Analytics

- Add Google Analytics (GA4)
- Add Search Console verification

---

## Developer Checklist

- [ ] Add meta tags globally
- [ ] Add alt texts to all images
- [ ] Compress and convert images to WebP
- [ ] Set proper heading structure (h1, h2, etc.)
- [ ] Add form labels and accessibility tags
- [ ] Implement lazy loading
- [ ] Add structured data for product cards
- [ ] Integrate Google Analytics and Search Console
- [ ] Add robots.txt and sitemap.xml
- [ ] Test responsiveness and accessibility
