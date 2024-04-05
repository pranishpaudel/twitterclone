"use client";

import { GoogleLogin } from "@react-oauth/google";

function ComGoogle() {
  return (
    <div className="border p-5 bg-slate-700">
      New to Twitter?
      <GoogleLogin onSuccess={(cred) => console.log(cred)} />
    </div>
  );
}
export default ComGoogle;
