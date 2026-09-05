import { renderProgramDocument } from 'lib/maniflow/document';

export const dynamic = 'force-static';

export function GET() {
  return new Response(renderProgramDocument(), {
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'content-disposition': 'inline; filename="ManiFlowStations-programma.md"'
    }
  });
}
