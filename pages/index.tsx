import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Restaurant, { RestaurantProps } from "../components/restaurant";
import ReservationForm from "../components/form";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  const restaurant: RestaurantProps = {
    name: "Cafe Camellia",
    cuisine: "Southern",
    priceRange: "$",
    rating: "5.0",
    description:
      "A sleek dining room and backyard with a focus on Southern-style seafood and classic cocktails, it’s a no brainer. Go for the prawn and grits, crab cakes, and blackened catfish.",
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Restaurant data={restaurant} />
      <Divider mb="4" mt="4" />
      <ReservationForm />
    </Layout>
  );
}
