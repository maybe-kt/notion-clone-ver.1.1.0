import { initEdgeStore } from '@edgestore/server';
import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';
 
const es = initEdgeStore.create();
 
/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket()
    .beforeDelete(({ ctx, fileInfo }) => {
      console.log('beforeDelete', ctx, fileInfo);
      return true; // allow delete
    }),
});
 
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});
 
export { handler as GET, handler as POST };
 
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;

// This is used in files within the `app/` directory
export async function generateStaticParams() {
  const ids = await fetch('https://example.com/api/edgestore-ids').then(res => res.json());

  return ids.map(id => ({
    edgestore: id, // Replace 'edgestore' with the dynamic parameter name
  }));
}

export default function EdgestorePage({ params }) {
  const { edgestore } = params;

  return <div>Content for {edgestore}</div>;
}