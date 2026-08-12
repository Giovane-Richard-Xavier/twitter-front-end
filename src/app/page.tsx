import { Button } from "@/components/ui/Button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <main className="w-screen min-h-screen">
      <section className="flex items-center justify-center w-full h-screen">
        <Card className="w-full max-w-md mx-auto rounded-md">
          <CardHeader>
            <CardTitle>Bem-vindo ao sistema</CardTitle>
            <CardDescription>Conecte-se para continuar</CardDescription>
            <CardAction>
              <a href="#" className="text-blue-600 hover:underline">
                Ajuda
              </a>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Faça login ou cadastre-se para acessar as funcionalidades.</p>
          </CardContent>
          <CardFooter className="flex items-center gap-5">
            <Button>Entrar</Button>
            <Button variant="secondary">Cancelar</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
