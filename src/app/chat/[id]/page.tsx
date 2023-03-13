import Chat from "@/app/components/Chat";
import ChatInput from "@/app/components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  return (
    <div className='flex flex-col h-screen overflow-hidden '>
      {/* Chat */}
      <Chat chatId={id} />
      {/* ChatInput */}
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
