import PocketBase from "pocketbase";

/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    pb: PocketBase;
  }
}
