import { Button } from "@/components/ui/button";

export const Footer = () => {
  const espUrl = "../../public/cvs/CV ESPAÑOL 2024.pdf";
  return (
    <footer className="my-10 text-center">
      <h2 className="text-3xl font-bold py-2">¡Contáctame!</h2>

      <p className="">
        <a href="mailto:carlospretto1989@gmail.com">
          carlospretto1989@gmail.com
        </a>
      </p>
      <p> 6676-8694</p>
      <span className="">
        <h3 className="font-semibold py-1">Descargar Resume</h3>{" "}
        <a href={espUrl} download={"carlos_pretto_cv_espanol_2024.pdf"}>
          <Button>Descargar</Button>
        </a>{" "}
      </span>
    </footer>
  );
};