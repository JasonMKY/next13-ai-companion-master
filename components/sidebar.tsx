"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import { useSignedInModal } from "@/hooks/use-signed-in-modal";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  isPro: boolean;
  companionId: string | undefined;
  userId: string | undefined;
}

function Sidebar({ isPro, companionId, userId }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const proModal = useProModal();
  const signedInModal = useSignedInModal();
  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Home",
      pro: false,
    },
    {
      icon: Plus,
      href: "/companion/new",
      label: "Create",
      pro: true,
    },
    {
      icon: Settings,
      href: "/settings",
      label: "Settings",
      pro: false,
    },
  ];

  const onNavigate = (url: string, pro: boolean, label: string) => {
    if (!userId) {
      return signedInModal.onOpen();
    }
    if (pro && !isPro) {
      return proModal.onOpen();
    }
    if (
      label === "Create" &&
      companionId &&
      userId !== "user_2Uea7sTHE5XHMPMoibjEduqJP7y"
    ) {
      return router.push("/companion/" + companionId);
    }
    return router.push(url);
  };
  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href, route.pro, route.label)}
              key={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
