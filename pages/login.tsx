import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

function login() {
  const [login, setLogin] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
        
    } else {
        
    }
  };

  return (
    <div
      className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center
    md:bg-transparent"
    >
      <Head>
        <title>QuaseFlix - Login</title>
      </Head>
      <Image
        src="/images/nt-bg.jpg"
        layout="fill"
        objectFit="cover"
        alt="QuaseFlix"
        className="-z-10 !hidden sm:!inline  opacity-60"
      />

      <div className=" absolute left-4 -top-8 cursor-pointer object-contain  md:left-10 md:top-2">
        <Image
          src="/images/netflix-logo.svg"
          alt="Quaseflix-logo"
          width={150}
          height={150}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Entrar</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            className="input"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-orange-500 italic p-1 font-light">
              Digite um email válido.
            </span>
          )}
          <input
            type="password"
            placeholder="Senha"
            className="input"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-orange-500 italic p-1 font-light">
              Sua senha deve conter entre 4 a 60 caracteres.
            </span>
          )}
          <button 
          onClick={() => setLogin(true)}
          type="submit" className="w-full rounded bg-[#e50914] py-3">
            Entrar
          </button>
          <div className="inline-flex space-x-1 text-[gray]">
            {" "}
            <h1>Novo no Quaseflix?</h1>
            <button 
            onClick={() => setLogin(false)}
            type="submit" className="hover:underline text-white">
              {" "}
              Registrar-se
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default login;
