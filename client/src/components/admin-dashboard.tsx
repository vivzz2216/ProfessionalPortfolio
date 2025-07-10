
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, User, Calendar, MessageSquare, Trash2, Eye } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import type { ContactMessage } from '@shared/schema';

export default function AdminDashboard() {
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  const { data: messages, isLoading, error } = useQuery({
    queryKey: ['contact-messages'],
    queryFn: async () => {
      const response = await apiRequest('GET', '/api/contact-messages');
      return Array.isArray(response) ? response : [];
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-700 rounded w-1/3 mb-8"></div>
            <div className="grid gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-32 bg-slate-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-red-900/20 border-red-500/30">
            <CardContent className="p-6 text-center">
              <p className="text-red-400">Failed to load contact messages</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-slate-400">Manage contact form submissions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Messages List */}
          <div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Messages ({messages?.length || 0})
                </CardTitle>
                <CardDescription>
                  Recent contact form submissions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                {!messages || messages.length === 0 ? (
                  <p className="text-slate-400 text-center py-8">No messages yet</p>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedMessage?.id === message.id
                          ? 'bg-blue-900/30 border-blue-500/50'
                          : 'bg-slate-700/30 border-slate-600 hover:bg-slate-700/50'
                      }`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-semibold">{message.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {formatDate(message.createdAt)}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm mb-2">{message.email}</p>
                      <p className="text-slate-300 font-medium text-sm">{message.subject}</p>
                      <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                        {message.message}
                      </p>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* Message Details */}
          <div>
            {selectedMessage ? (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Message Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="text-sm text-slate-400">Name</p>
                        <p className="text-white font-medium">{selectedMessage.name}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="text-white font-medium">{selectedMessage.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="text-sm text-slate-400">Received</p>
                        <p className="text-white font-medium">
                          {formatDate(selectedMessage.createdAt)}
                        </p>
                      </div>
                    </div>

                    <Separator className="bg-slate-600" />

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <MessageSquare className="w-5 h-5 text-slate-400" />
                        <p className="text-sm text-slate-400">Subject</p>
                      </div>
                      <p className="text-white font-medium">{selectedMessage.subject}</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-400 mb-3">Message</p>
                      <div className="bg-slate-700/30 p-4 rounded-lg">
                        <p className="text-slate-300 whitespace-pre-wrap">
                          {selectedMessage.message}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(`mailto:${selectedMessage.email}`)}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Reply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8 text-center">
                  <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">Select a message to view details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
