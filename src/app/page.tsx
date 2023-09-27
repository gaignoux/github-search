"use client";

import { Search } from "@base/components/search";
import { Container } from "@mui/material";
import { Repositories } from "@base/components/repositories";
import { Pagination } from "@base/components/navigation/pagination";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Search />
      <Repositories />
      <Pagination />
    </Container>
  );
}
