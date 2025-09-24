import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/store";
import { ProductDetail } from "@/components/store/ProductDetail";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return { title: "未找到商品" };
  }
  return {
    title: `${product.name} | On 移动端商城`,
    description: product.tagline,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
