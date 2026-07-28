import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { blogData } from '@/data/blogData';
import { BookOpen, Clock, Edit3, Plus, Search, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminBlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const postsList = Object.values(blogData);

  const filtered = postsList.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDelete = (title: string) => {
    toast.success(`Article "${title}" deleted.`);
  };

  return (
    <>
      <Helmet>
        <title>Manage Blog Posts | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Blog Posts Management</h1>
            <p className="text-sm text-muted-foreground">Publish and manage digital growth playbooks & articles.</p>
          </div>

          <Link to="/admin/blog/new">
            <Button variant="accent">
              <Plus className="h-4 w-4 mr-1" /> Write New Article
            </Button>
          </Link>
        </div>

        <Card className="p-4 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-border bg-background pl-10 pr-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <span className="text-xs font-semibold text-muted-foreground">{filtered.length} Articles Total</span>
        </Card>

        <div className="rounded-3xl border border-border/80 bg-card overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-foreground">
              <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border/60">
                <tr>
                  <th className="px-4 py-3">Article Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Author</th>
                  <th className="px-4 py-3">Published Date</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filtered.map((post) => (
                  <tr key={post.slug} className="hover:bg-muted/40 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="font-bold text-foreground flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" /> {post.title}
                      </div>
                      <div className="text-[11px] text-muted-foreground flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {post.readingTime}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <Badge variant="accent">{post.category}</Badge>
                    </td>
                    <td className="px-4 py-3.5 font-medium">{post.author.name}</td>
                    <td className="px-4 py-3.5 text-muted-foreground">{post.publishedAt}</td>
                    <td className="px-4 py-3.5 text-right space-x-2">
                      <Link to={`/admin/blog/${post.slug}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit3 className="h-3.5 w-3.5" />
                        </Button>
                      </Link>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(post.title)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
