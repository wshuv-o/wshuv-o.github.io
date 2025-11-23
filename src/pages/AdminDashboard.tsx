import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getPortfolioData, setPortfolioData } from "@/lib/portfolioData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Trash2 } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAdminAuthenticated");
    if (!isAuth) {
      navigate("/admin");
      return;
    }
    setData(getPortfolioData());
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin");
  };

  const handleSave = () => {
    setPortfolioData(data);
    toast({
      title: "Changes saved",
      description: "Portfolio data has been updated successfully",
    });
  };

  const addSkill = () => {
    const newSkill = { id: Date.now().toString(), category: "New Category", items: [] };
    setData({ ...data, skills: [...data.skills, newSkill] });
  };

  const addExperience = () => {
    const newExp = { 
      id: Date.now().toString(), 
      company: "Company Name", 
      position: "Position", 
      period: "Period",
      description: "Description"
    };
    setData({ ...data, experiences: [...data.experiences, newExp] });
  };

  const addProject = () => {
    const newProject = { 
      id: Date.now().toString(), 
      title: "Project Title", 
      period: "Period",
      description: "Description",
      link: "",
      technologies: []
    };
    setData({ ...data, projects: [...data.projects, newProject] });
  };

  const deleteSkill = (id: string) => {
    setData({ ...data, skills: data.skills.filter((s: any) => s.id !== id) });
  };

  const deleteExperience = (id: string) => {
    setData({ ...data, experiences: data.experiences.filter((e: any) => e.id !== id) });
  };

  const deleteProject = (id: string) => {
    setData({ ...data, projects: data.projects.filter((p: any) => p.id !== id) });
  };

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-gradient">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="personal" className="space-y-8">
          <TabsList>
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-display font-semibold mb-6">Personal Information</h2>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={data.personalInfo.name}
                    onChange={(e) => setData({ ...data, personalInfo: { ...data.personalInfo, name: e.target.value } })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={data.personalInfo.email}
                    onChange={(e) => setData({ ...data, personalInfo: { ...data.personalInfo, email: e.target.value } })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={data.personalInfo.phone}
                    onChange={(e) => setData({ ...data, personalInfo: { ...data.personalInfo, phone: e.target.value } })}
                  />
                </div>
                <div>
                  <Label htmlFor="github">GitHub</Label>
                  <Input
                    id="github"
                    value={data.personalInfo.github}
                    onChange={(e) => setData({ ...data, personalInfo: { ...data.personalInfo, github: e.target.value } })}
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    value={data.personalInfo.linkedin}
                    onChange={(e) => setData({ ...data, personalInfo: { ...data.personalInfo, linkedin: e.target.value } })}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-display font-semibold">Skills</h2>
              <Button onClick={addSkill}>Add Skill Category</Button>
            </div>
            {data.skills.map((skill: any, index: number) => (
              <div key={skill.id} className="p-6 rounded-2xl bg-card border border-border space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1 space-y-4">
                    <div>
                      <Label>Category</Label>
                      <Input
                        value={skill.category}
                        onChange={(e) => {
                          const newSkills = [...data.skills];
                          newSkills[index].category = e.target.value;
                          setData({ ...data, skills: newSkills });
                        }}
                      />
                    </div>
                    <div>
                      <Label>Items (comma separated)</Label>
                      <Input
                        value={skill.items.join(", ")}
                        onChange={(e) => {
                          const newSkills = [...data.skills];
                          newSkills[index].items = e.target.value.split(",").map(s => s.trim());
                          setData({ ...data, skills: newSkills });
                        }}
                      />
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteSkill(skill.id)}
                    className="ml-4"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-display font-semibold">Experience</h2>
              <Button onClick={addExperience}>Add Experience</Button>
            </div>
            {data.experiences.map((exp: any, index: number) => (
              <div key={exp.id} className="p-6 rounded-2xl bg-card border border-border space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1 space-y-4">
                    <div>
                      <Label>Company</Label>
                      <Input
                        value={exp.company}
                        onChange={(e) => {
                          const newExp = [...data.experiences];
                          newExp[index].company = e.target.value;
                          setData({ ...data, experiences: newExp });
                        }}
                      />
                    </div>
                    <div>
                      <Label>Position</Label>
                      <Input
                        value={exp.position}
                        onChange={(e) => {
                          const newExp = [...data.experiences];
                          newExp[index].position = e.target.value;
                          setData({ ...data, experiences: newExp });
                        }}
                      />
                    </div>
                    <div>
                      <Label>Period</Label>
                      <Input
                        value={exp.period}
                        onChange={(e) => {
                          const newExp = [...data.experiences];
                          newExp[index].period = e.target.value;
                          setData({ ...data, experiences: newExp });
                        }}
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => {
                          const newExp = [...data.experiences];
                          newExp[index].description = e.target.value;
                          setData({ ...data, experiences: newExp });
                        }}
                      />
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteExperience(exp.id)}
                    className="ml-4"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-display font-semibold">Projects</h2>
              <Button onClick={addProject}>Add Project</Button>
            </div>
            {data.projects.map((project: any, index: number) => (
              <div key={project.id} className="p-6 rounded-2xl bg-card border border-border space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1 space-y-4">
                    <div>
                      <Label>Title</Label>
                      <Input
                        value={project.title}
                        onChange={(e) => {
                          const newProjects = [...data.projects];
                          newProjects[index].title = e.target.value;
                          setData({ ...data, projects: newProjects });
                        }}
                      />
                    </div>
                    <div>
                      <Label>Period</Label>
                      <Input
                        value={project.period}
                        onChange={(e) => {
                          const newProjects = [...data.projects];
                          newProjects[index].period = e.target.value;
                          setData({ ...data, projects: newProjects });
                        }}
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => {
                          const newProjects = [...data.projects];
                          newProjects[index].description = e.target.value;
                          setData({ ...data, projects: newProjects });
                        }}
                      />
                    </div>
                    <div>
                      <Label>Link (optional)</Label>
                      <Input
                        value={project.link || ""}
                        onChange={(e) => {
                          const newProjects = [...data.projects];
                          newProjects[index].link = e.target.value;
                          setData({ ...data, projects: newProjects });
                        }}
                      />
                    </div>
                    <div>
                      <Label>Technologies (comma separated, optional)</Label>
                      <Input
                        value={project.technologies?.join(", ") || ""}
                        onChange={(e) => {
                          const newProjects = [...data.projects];
                          newProjects[index].technologies = e.target.value ? e.target.value.split(",").map(s => s.trim()) : [];
                          setData({ ...data, projects: newProjects });
                        }}
                      />
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteProject(project.id)}
                    className="ml-4"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        <div className="flex justify-end mt-8">
          <Button onClick={handleSave} size="lg" className="gradient-lovable">
            Save All Changes
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
