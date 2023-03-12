import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className='p-2 flex flex-col min-h-screen'>
      <div className='flex-1'>
        <div>
          {/* New Chat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* Map Through ChatRows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
