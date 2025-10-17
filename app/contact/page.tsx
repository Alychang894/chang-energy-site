export default function Page(){
  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 text-gray-600">Book a strategy call. Calendly embed goes here.</p>
      <form className="mt-8 grid md:grid-cols-2 gap-4">
        <input className="border rounded-xl p-3" placeholder="Name"/>
        <input className="border rounded-xl p-3" placeholder="Email"/>
        <textarea className="border rounded-xl p-3 md:col-span-2" placeholder="What do you want to accomplish?"/>
        <button className="border rounded-xl px-4 py-2 w-fit">Send</button>
      </form>
    </section>
  )
}
