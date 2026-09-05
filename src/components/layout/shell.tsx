import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@kamod-ch/ui";

export const PageShell = () => (
  <SidebarProvider>
    <Sidebar variant="inset">
      <SidebarContent>Menu</SidebarContent>
    </Sidebar>
    <SidebarInset>
      <header class="flex h-12 items-center gap-2 px-3">
        <SidebarTrigger />
        <h1>judul</h1>
      </header>
      Main content
    </SidebarInset>
  </SidebarProvider>
);
