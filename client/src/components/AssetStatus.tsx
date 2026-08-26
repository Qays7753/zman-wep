/** Herbarium Dispatch: transparent status marker for media awaiting approval. */
import type { AssetStatus } from "@/data/siteContent";

export function AssetStatus({ status }: { status: AssetStatus }) {
  return status === "temporary-reference" ? <span className="asset-status">مرجع مؤقت</span> : null;
}
